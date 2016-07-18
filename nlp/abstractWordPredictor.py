#/usr/lib/python
from iWordPredictor import IWordPredictor

class AbstractWordPredictor(IWordPredictor):
    """
    This is an abstract class for word predictor. This should not be 
    instantiated. This class gives some basic functionality for methods.
    However, these methods by themselves don't serve the method's purpose.
    The derived classes should override these methods.
    """
    # class state that flags if the model is trained or not.
    __isModelTrained = False

    def train(self, dataPath):
        """
        This is an abstract method for training. After the method is 
        overriden, the train method should set the model to trained. In this,
        abstract implementation, the model is set to trained. In the 
        overridden method, the model should be trained first and only then
        to be flagged as trained.
        @param dataPath - filename/url of the data file
        """
        print "This is an abstract train method"

        # Set the model to trained.
        self.setModelToTrained()
   
    def guessNextWord(self, history):
        """
        This is an abstract method to guess next word based on for the given 
        history word/sentence. In this abstract method, it only validates if 
        the model is trained. If not, the model needs to be trained.
        @param history - word/sentence for which next word id to be predicted
        """
        # Check if the model is trained. Only then continue, else not.
        print "This is an abstract method to guess next word"
        return self.isModelTrained()

    def isModelTrained(self):
        """
        This method checks if the model is trained. 
        @return True - if model is trained, False - otherwise
        """
        print "Checking if the model is trained"
        return self.__isModelTrained

    def setModelToTrained(self):
        """
        This method sets the model to trained.
        """
        print "Setting model to trained"
        self.__isModelTrained = True 

