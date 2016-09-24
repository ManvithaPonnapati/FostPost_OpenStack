#/usr/bin/python
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import collections
import math
import os
import random
import zipfile

import numpy as np
from six.moves import urllib
from six.moves import xrange  # pylint: disable=redefined-builtin
import tensorflow as tf
from fostpost_app.skip_utils import *
from fostpost_app.abstractWordPredictor import AbstractWordPredictor
import pickle

class SkipGramWordPredictor(AbstractWordPredictor):
    """
    This class implements the Skip Gram model for word prediction based on 
    word embedding in Tensor Flow.
    """
    __reverse_dictionary=None
    __sim=None
    def generateNGrams(self):
        """
        This methos generates nGrams from words.
        words - set of words as they appear in the dataset.
        N - size of the nGram(1 - Unigram, 2 - Bigram and so on)
        """
        self.__nGrams =[''.join(self.__words[i:i+self.__N]) \
                       for i in xrange(len(self.__words)-self.__N+1)]

    def build_dataset(self):
        """
        This method builds the data set for testing.
        N - size of the nGram(1 - Unigram, 2 - Bigram and so on)
        """
        count = [['UNK', -1]]
        self.generateNGrams()
        del self.__words # to save memory


        # assigning word embeddings
        count.extend(collections.Counter(self.__nGrams).most_common(self.__vocabulary_size - 1))
        self.__dictionary = dict()
        for word, _ in count:
            self.__dictionary[word] = len(self.__dictionary)

        # Replace the rare words with UNK token
        self.__data = list()
        unk_count = 0
        for word in self.__nGrams:
            if word in self.__dictionary:
                index = self.__dictionary[word]
            else:
                index = self.__dictionary['UNK']
                unk_count += 1
            self.__data.append(index)
        count[0][1] = unk_count

        # Build the reverse Dictionary
        self.__reverse_dictionary = dict(zip(self.__dictionary.values(), self.__dictionary.keys()))
        #return data, count, dictionary, reverse_dictionary


    def generate_batch(self, batch_size, num_skips, skip_window):
        """
        This function generates batches for training, validation and testing
        """
        assert batch_size % num_skips == 0
        assert num_skips <= 2 * skip_window
        batch = np.ndarray(shape=(batch_size), dtype=np.int32)
        labels = np.ndarray(shape=(batch_size, 1), dtype=np.int32)
        span = 2 * skip_window + 1 # [ skip_window target skip_window ]
        buffer = collections.deque(maxlen=span)
        for _ in range(span):
            buffer.append(self.__data[self.__data_index])
            self.__data_index = (self.__data_index + 1) % len(self.__data)
        for i in range(batch_size // num_skips):
            target = skip_window  # target label at the center of the buffer
            targets_to_avoid = [ skip_window ]
            for j in range(num_skips):
                while target in targets_to_avoid:
                    target = random.randint(0, span - 1)
                targets_to_avoid.append(target)
                batch[i * num_skips + j] = buffer[skip_window]
                labels[i * num_skips + j, 0] = buffer[target]
            buffer.append(self.__data[self.__data_index])
            self.__data_index = (self.__data_index + 1) % len(self.__data)
        return batch, labels


    def __init__(self):
        """
        This function initializes the skip gram model.
        """ 
        print("Initializing the skip gram model parameters")
        self.__vocabulary_size = 50000
        self.__N = 1               # N gram size


    def train(self, dataPath):
        """
        This method trains the model for the data given in the data path.
        dataPath - Path for the dataset.
        """
        # Step 1: Fetch the data set
        self.__words = read_data_from_zip(dataPath)
        print('Data size', len(self.__words))

        # Step 2: Build the dictionary and replace rare words with UNK token
        self.build_dataset()

        # Step 3: Function to generate a training batch for the skip-gram model.
        self.__data_index = 0
        batch, labels = self.generate_batch(batch_size=8, num_skips=2, skip_window=1)

        # Print sample reverse dictionary representations
        for i in range(8):
            print(batch[i], self.__reverse_dictionary[batch[i]],'->', labels[i, 0], 
                    self.__reverse_dictionary[labels[i, 0]])

        # Step 4: Build and train a skip-gram model.
        batch_size = 128
        embedding_size = 128  # Dimension of the embedding vector.
        skip_window = 1       # How many words to consider left and right.
        num_skips = 2         # How many times to reuse an input to generate a label.

        # We pick a random validation set to sample nearest neighbors. Here we limit the
        # validation samples to the words that have a low numeric ID, which by
        # construction are also the most frequent.
        valid_size = 16     # Random set of words to evaluate similarity on.
        valid_window = 100  # Only pick dev samples in the head of the distribution.
        valid_examples = np.random.choice(valid_window, valid_size, replace=False)
        num_sampled = 64    # Number of negative examples to sample.
        graph = tf.Graph()


        with graph.as_default():

            # Input data.
            train_inputs = tf.placeholder(tf.int32, shape=[batch_size])
            train_labels = tf.placeholder(tf.int32, shape=[batch_size, 1])
            valid_dataset = tf.constant(valid_examples, dtype=tf.int32)

            # Ops and variables pinned to the CPU because of missing GPU implementation
            saver = None
            with tf.device('/cpu:0'):
                # Look up embeddings for inputs.
                embeddings = tf.Variable(
                        tf.random_uniform([self.__vocabulary_size, embedding_size], -1.0, 1.0))
                embed = tf.nn.embedding_lookup(embeddings, train_inputs)

                # Construct the variables for the NCE loss
                nce_weights = tf.Variable(
                    tf.truncated_normal([self.__vocabulary_size, embedding_size],
                            stddev=1.0 / math.sqrt(embedding_size)))
                nce_biases = tf.Variable(tf.zeros([self.__vocabulary_size]))
                #saver = tf.train.Saver()

            # Compute the average NCE loss for the batch.
            # tf.nce_loss automatically draws a new sample of the negative labels each
            # time we evaluate the loss.
            loss = tf.reduce_mean(
                tf.nn.nce_loss(nce_weights, nce_biases, embed, train_labels,
                num_sampled, self.__vocabulary_size))


            # Construct the SGD optimizer using a learning rate of 1.0.
            optimizer = tf.train.GradientDescentOptimizer(1.0).minimize(loss)

            # Compute the cosine similarity between minibatch examples and all embeddings.
            norm = tf.sqrt(tf.reduce_sum(tf.square(embeddings), 1, keep_dims=True))
            normalized_embeddings = embeddings / norm
            valid_embeddings = tf.nn.embedding_lookup(
                normalized_embeddings, valid_dataset)
            similarity = tf.matmul(
                valid_embeddings, normalized_embeddings, transpose_b=True)

            # Add variable initializer.
            init = tf.initialize_all_variables()

        # Step 5: Begin training.
        num_steps = 100001
        # Initialize the saver for saving the session
        #saver = tf.train.Saver()
        with tf.Session(graph=graph) as session:
            # We must initialize all variables before we use them.
            init.run()
            print("Initialized")

            average_loss = 0
            for step in xrange(num_steps):
                batch_inputs, batch_labels = self.generate_batch(
                    batch_size, num_skips, skip_window)
                feed_dict = {train_inputs : batch_inputs, train_labels : batch_labels}

                # We perform one update step by evaluating the optimizer op (including it
                # in the list of returned values for session.run()
                _, loss_val = session.run([optimizer, loss], feed_dict=feed_dict)
                average_loss += loss_val

                if step % 2000 == 0:
                    if step > 0:
                        average_loss /= 2000
                    # The average loss is an estimate of the loss over the last 2000 batches.
                    print("Average loss at step ", step, ": ", average_loss)
                    average_loss = 0

                #self.__sim = similarity.eval()
                # Note that this is expensive (~20% slowdown if computed every 500 steps)
                nearest = None
                if step % 10000 == 0:
                    #print ('Updating similarity')
                    self.__sim = similarity.eval()
                    #print ("Similarity: ", self.__sim)
                    #saver.save(session, "tmp/learntModel.ckpt")
            final_embeddings = normalized_embeddings.eval()
            #print ("Final Embeddings: ", final_embeddings)


        # Store the models learnt.
        pickle.dump(self.__sim, open('sim.pkl','wb+'))
        pickle.dump(self.__reverse_dictionary, open('revDict.pkl','wb+'))
        # Set the model to trained.
        self.setModelToTrained()


    def guessNextWord(self, history,sim=None,revDict=None):
        if (sim != None):
            self.__sim = sim
            print ('self.__sim: ',self.__sim)
        if revDict != None:
            self.__reverse_dictionary = revDict

        self.__words= history.split()
        self.generateNGrams()
        del self.__words
        lastWord= self.__nGrams[-1]
        # Check if this word is present.
        if lastWord in self.__reverse_dictionary.values():
            top_k=1    # We want only one prediction for next word
            nearest=(-self.__sim[1, :]).argsort()[1:top_k+1]
            log_str="Next word for - {} - is :".format(lastWord)
            for k in xrange(top_k):
                close_word = self.__reverse_dictionary[nearest[k]]
                log_str="{} {}".format(log_str, close_word)
            print (log_str)
        return close_word

    def setupModel(self):
        # Check if models are already learnt.
        print (os.getcwd())
        if os.path.exists('fostpost_app/sim.pkl') and os.path.exists('fostpost_app/revDict.pkl'):
            print ('Models are already learnt, loading the models')
            self.__sim = pickle.load(open('fostpost_app/sim.pkl','rb+'))
            #print ('sim: ',self.__sim)
            self.__reverse_dictionary=pickle.load(open('fostpost_app/revDict.pkl', 'rb+'))
        else:
            print ('Models not learnt. Learning now')
            fileDetails = ('text8.zip', 'http://mattmahoney.net/dc/',31344016)
            filename = maybe_download(*fileDetails)
            self.train(filename)


if __name__ == "__main__":
    # Check if models are already learnt.
    wordPredictor = SkipGramWordPredictor()
    wordPredictor.setupModel()
    wordPredictor.guessNextWord('next word is')

