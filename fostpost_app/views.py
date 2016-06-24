from rest_framework import permissions, viewsets
from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response

from rest_framework.renderers import JSONRenderer
from fostpost_app.permissions import IsAccountOwner

from django.shortcuts import render
from fostpost_app.models import CraftCloud_User
from fostpost_app.serializers import CraftCloud_UserSerializer
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
def RegisterView(request):
	return render(request,'fostpost_app/register.html')



def index(request):
	return render(request, 'fostpost_app/index.html')

def font(request):
	return render(request,'fostpost_app/font.html')

def create(request):
	return render(request,'fostpost_app/create.html')


@api_view(['GET'])

def email_list(request):
	renderer_classes = (JSONRenderer, )
	emails = CraftCloud_User.objects.all()
	serializer_class = CraftCloud_UserSerializer(emails,many=True)
	return Response(serializer_class.data)
	

