<<<<<<< HEAD
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
=======
__author__ = 'manvitha_ponnapati'

from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import BaseUserManager
class CraftCloud_AccountManager(BaseUserManager):
    def create_user(self,email,password=None,**kwargs):
        if not email:
            raise ValueError('Users must have a valid email address')
        if not kwargs.get('username'):
            raise ValueError('Users must have a valid email address')
        craftCloud_account=self.model(email=self.normalize_email(email))
        craftCloud_account.set_password(password)
        craftCloud_account.save()
    def create_superuser(self,email,password,**kwargs):
        craftCloud_account=self.create_user(email,password,**kwargs)
        craftCloud_account.is_admin=True
        craftCloud_account.save()
        return craftCloud_account

class CraftCloud_Account(AbstractBaseUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=40, unique=True)
    is_admin = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    

    objects = CraftCloud_AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def _unicode_(self):
        return self.email

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    @property
    def is_superuser(self):
        return self.is_admin

    @property
    def is_staff(self):
        return self.is_admin
    def has_perm(self,perm,Obj=None):
        return self.is_admin
    def has_module_perms(self,app_label):
        return self.is_admin
    
    

   



>>>>>>> 20ff531a66d8e8117778f42582682b6842d4bf3c
