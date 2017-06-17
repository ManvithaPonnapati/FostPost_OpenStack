from django.db import models
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager
from django.conf import settings
from django.conf.urls.static import static
from django.core.files.storage import FileSystemStorage
class OverwriteStorage(FileSystemStorage):
    def _save(self, name, content):
        if self.exists(name):
            self.delete(name)
        return super(OverwriteStorage, self)._save(name, content)

    def get_available_name(self, name):
        return name

class Photo(models.Model):
    file = models.CharField(max_length=512)
    email = models.CharField(max_length=40)
    

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

