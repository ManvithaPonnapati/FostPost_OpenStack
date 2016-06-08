from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=100, blank=False, default='')
    
class Image_Asset(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, blank=False, default='')
 
class Logo_Asset(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, blank=False, default='')   

class Saved_Creative(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=100, blank=False, default='')
    background_image=models.ImageField()
    logo_image=models.ImageField()
    string_array=models.ArrayField()
    font_size_array=models.ArrayField()
    text_color=models.CharField(max_length=15)
    background_color=models.CharField(max_length=15)
    positions_text=models.ArrayField()
    positions_images=models.ArrayField()
    position_logo=models.ArrayField()