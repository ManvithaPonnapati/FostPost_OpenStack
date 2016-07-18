from skipGramWordPredictor import SkipGramWordPredictor
from utils import *
# Read the file
fileDetails = ('text8.zip', 'http://mattmahoney.net/dc/',31344016)
filename = maybe_download(*fileDetails)

# Instantiate the predictor
wordPredictor = SkipGramWordPredictor()

# Train the predictor
wordPredictor.train(filename)

# Guess the next word
history='next word is'
nextWord = wordPredictor.guessNextWord(history)
print "Next word for {}: {}".format(history, nextWord)

# Need to work on the evaluation of the predictor
