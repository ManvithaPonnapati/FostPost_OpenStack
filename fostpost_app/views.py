from rest_framework import permissions, viewsets
from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from fostpost_app.permissions import IsAccountOwner
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from fostpost_app.models import CraftCloud_User
from fostpost_app.serializers import CraftCloud_UserSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import HttpResponse
from fostpost_app.models import Photo
import urllib
import urllib2
import json
from PIL import Image
import requests
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
import tempfile
from django.core import files
from colorthief import ColorThief
from django.conf import settings
from django.conf.urls.static import static
from colorthief import ColorThief
import base64
from base64 import b64decode
import os
#import numpy as np
#import cv2
#from matplotlib import pyplot as plt


def RegisterView(request):
	return render(request,'fostpost_app/register.html')

def index(request):
	return render(request, 'fostpost_app/index.html')

def font(request):
	message = request.GET.get('user')
	print message
	return render(request,'fostpost_app/font.html')

def create(request):
	return render(request,'fostpost_app/create.html')

@csrf_exempt
def unsplash_images(request):
	image_array=[]
	x=urllib2.urlopen("https://api.unsplash.com/photos/search?page=1&query="+(request.body)+"&client_id=1f783afb6d0a3a793da48335a7bda1a2a2923b5cf43c69bdfd0f86281db4331c").read()
	x=json.loads(x)
	y=[]
	w=[]
	h=[]
	for i in range(0,len(x)):
		y.append(x[i]['urls']['thumb'])
		# img_temp = NamedTemporaryFile(delete=True)
		# temp_file_name = img_temp.name
		# img_temp.write(urllib2.urlopen(x[i]['urls']['thumb']).read())
		# img_temp.flush()
		# im=Photo(email="rp493@cornell.edu")
		# im.file.save("uploaded_"+str(i)+".jpg", File(img_temp))
		# file_string = "uploaded_"+str(i)+".jpg"
		# imgx=Image.open("/CraftCloud/FostPost/fostpost_app/static/images_uploaded/"+file_string)
		# w.append(imgx.size[0])
		# h.append(imgx.size[1])
	return HttpResponse(json.dumps({"y":y,"width":w,"height":h}))

@csrf_exempt
def drag_upload(request):
	json_body = json.loads(request.body)
	x = json_body["urls"]
	y = json_body["increment"]
	user = json_body["user"]
	image_base64 = x.split('base64,', 1 )
	image_base64[1] = image_base64[1].encode('utf-8').strip()
	image_data = b64decode(image_base64[1])
	im=Photo(email=user)
	img_temp = NamedTemporaryFile(delete=True)
	temp_file_name = img_temp.name
	img_temp.write(image_data)
	img_temp.flush()
	user = user.replace("@","")
	(dirName, fileName) = os.path.split(temp_file_name)
	fileBaseName = os.path.splitext(fileName)[0]
	file_name_append=str(user)+"_"+str(fileBaseName)
	file_string = "/media/"+file_name_append+".jpg"
	im.file.save(file_string, File(img_temp))
	return HttpResponse(json.dumps({'file_string':file_string}))


@csrf_exempt
def get_all_uploaded_images(request):
	x = request.body
	all_images = Photo.objects.all()
	return HttpResponse(all_images.values('file'))



@csrf_exempt
def upload_logo(request):
	x = request.body
	image_base64 = x.split('base64,', 1 )
	image_base64[1] = image_base64[1].encode('utf-8').strip()
	image_data = b64decode(image_base64[1])
	im=Photo(email="rp493@cornell.edu")
	img_temp = NamedTemporaryFile(delete=True)
	temp_file_name = img_temp.name
	img_temp.write(image_data)
	img_temp.flush()

	file_string = "logo_image.png"
	im.file.save(file_string, File(img_temp))
	#imgx=Image.open("/CraftCloud/FostPost/fostpost_app/static/images_uploaded/"+file_string,0)
	return HttpResponse(json.dumps({'file_string':file_string}))


def decode_base64(data):
    """Decode base64, padding being optional.

    :param data: Base64 data as an ASCII byte string
    :returns: The decoded byte string.

    """
    missing_padding = len(data) % 4
    if missing_padding != 0:
        data += b'='* (4 - missing_padding)
    return base64.decodestring(data)

@csrf_exempt
def get_colors(request):
	x=request.body
	color_thief = ColorThief('/CraftCloud/FostPost/fostpost_app'+x)
	# get the dominant color
	dominant_color = color_thief.get_color(quality=1)
	# build a color palette
	palette = color_thief.get_palette(color_count=6)
	return HttpResponse(json.dumps(palette))

@api_view(['GET'])
def email_list(request):
	renderer_classes = (JSONRenderer, )
	emails = CraftCloud_User.objects.all()
	serializer_class = CraftCloud_UserSerializer(emails,many=True)
	return Response(serializer_class.data)

@csrf_exempt
def authenticate_email(request):
	new_user=CraftCloud_User(email=request.body)
	return HttpResponse("Success")



def get_the_next_word(request):

	#hkjhkh 
	return "words"

