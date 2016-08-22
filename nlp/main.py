from skipGramWordPredictor import SkipGramWordPredictor
from utils import *
import time
import pickle

# Instantiate the predictor
wordPredictor = SkipGramWordPredictor()
sim=None
revDict=None
if os.path.exists('sim.pkl') and os.path.exists('revDict.pkl'):
    print ('Models are already learnt, loading the models')
    sim = pickle.load(open('sim.pkl','rb+'))
    print ('sim: ',sim)
    revDict=pickle.load(open('revDict.pkl', 'rb+'))
else:
    print ('Models not learnt. Learning now')
    fileDetails = ('text8.zip', 'http://mattmahoney.net/dc/',31344016)
    # Read the file
    filename = maybe_download(*fileDetails)
    # Train the predictor
    trainStart = time.time()
    wordPredictor.train(filename)
    trainEnd = time.time()

    print 'Training time: {}'.format(trainEnd-trainStart)

# Guess the next word
history = 'next word is'
testStart = time.time()
nextWord = wordPredictor.guessNextWord(history,sim,revDict)
testEnd = time.time()


print "Next word for {}: {}".format(history, nextWord)
print 'Test time: {}'.format(testEnd - testStart)
# Need to work on the evaluation of the predictor
