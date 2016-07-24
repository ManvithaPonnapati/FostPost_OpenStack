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

import urllib
import urllib2
import json
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
	x=urllib2.urlopen("https://api.unsplash.com/photos/DbeEqK0iFRQ?client_id=b348e0941b9d614b3c439557924e2b5a2b14b896bc97f2211929d9ac9fcb8a91").read()
	x=json.loads(x)
	y=x['urls']['thumb']
	return HttpResponse(y)

@api_view(['GET'])
def email_list(request):
	renderer_classes = (JSONRenderer, )
	emails = CraftCloud_User.objects.all()
	serializer_class = CraftCloud_UserSerializer(emails,many=True)
	return Response(serializer_class.data)

@csrf_exempt
def authenticate_email(request):
	if request.method=='POST':
		new_user=CraftCloud_User(email=request.body)
		if(CraftCloud_User.objects.filter(email=request.body).exists()):
			return_log="User Account already exists"
		else:
			new_user.save()
			return_log="New User created"
	return HttpResponse(return_log)



