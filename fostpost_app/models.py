__author__ = 'manvitha_ponnapati'

from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


class User(models.Model):
    """ An awesome fostpost customer"""
    email = models.CharField(max_length=100)
    created_date = models.CharField(max_length=500)
   


class asset_image(models.Model):
    """ Model for any uploaded images to the database."""
    user = models.ForeignKey(User)
    image_upload = models.ImageField(upload_to=image_file_name)

class asset_logo(models.Model):
    """ Model for any uploaded logos to the database."""
    user = models.ForeignKey(User)
    image_upload = models.ImageField(upload_to=image_file_name)


class saved_creative(models.Model):
    """ Model for any saved creatives to the database."""
    user = models.ForeignKey(User)
    image_array= models.CharField(max_length=200)
    logo=models.CharField(max_length=200)
    text_array=models.CharField(max_length=200)
    text_positions=models.CharField(max_length=200)
    creative_size_x=models.IntegerField(max_length=10)
    creative_size_y=models.IntegerField(max_length=10)
    def set_image_array(self, x):
        self.image_array = json.dumps(x)

    def get_image_array(self, x):
        return json.loads(self.image_array)
    def set_logo(self, x):
        self.image_array = json.dumps(x)

    def get_logo(self, x):
        return json.loads(self.image_array)

    def set_text_strings(self, x):
        self.image_array = json.dumps(x)

    def get_text_strings(self, x):
        return json.loads(self.image_array)

    def set_text_positions(self, x):
        self.image_array = json.dumps(x)

    def get_text_postions(self, x):
        return json.loads(self.image_array)


def image_file_name(instance):
    return '/'.join(['image_asset', instance.user.email, "%Y %M %d:%H:%M:%S"])

def logo_file_name(instance):
    return '/'.join(['logo_asset', instance.user.email, "%Y %M %d:%H:%M:%S"])