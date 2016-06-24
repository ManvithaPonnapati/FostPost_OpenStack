from django.db import models

class CraftCloud_User(models.Model):
    email = models.CharField(max_length=30)

class asset_image(models.Model):
    image_url=models.CharField(max_length=50)
    email = models.CharField(max_length=30)

class asset_logo(models.Model):
    logo_url=models.CharField(max_length=50)
    email = models.CharField(max_length=30)

class creative(models.Model):
    email = models.CharField(max_length=30)
    image_url=models.CharField(max_length=50)
    logo_url=models.CharField(max_length=50)
    image_x=models.IntegerField(max_length=20)
    image_y=models.IntegerField(max_length=20)
    logo_x=models.IntegerField(max_length=20)
    logo_y=models.IntegerField(max_length=20)
    strings=models.CharField(max_length=200)
    strings_x=models.CharField(max_length=200)
    strings_y=models.CharField(max_length=200)

