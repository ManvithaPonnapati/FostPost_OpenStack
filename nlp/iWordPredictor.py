#/usr/lib/python
class IWordPredictor():
    """
    This class for word predictor gives the apis to be used for the next word
    prediction. This class can only be used as interface/abstract class and
    should not be instantiated.
    """

    def train(self, dataPath):
        """
        This method is used to train the model with the data. Data is provided
        in file or url not as string.
        @param dataPath - filename/url of the data file
        """
        raise NotImplementedError
   
    def guessNextWord(self, history, sim=None, revDict=None):
        """
        This method guesses the next word based on the trained model for the 
        given history word or sentence. 
        @param history - word/sentence for which next word id to be predicted
        """
        raise NotImplementedError
