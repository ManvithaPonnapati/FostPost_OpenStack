from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers


from fostpost_app.models import CraftCloud_User,asset_image,asset_logo,creative

class CraftCloud_UserSerializer(serializers.Serializer):
    email=serializers.CharField(required=True,max_length=30)
    def create(self, validated_data):
        return CraftCloud_User.objects.create(**validated_data)


class asset_image_serializer(serializers.Serializer):
    image_url=serializers.CharField(required=False,max_length=50)
    email=serializers.CharField(required=True,max_length=30)
    def create(self, validated_data):
        return asset_image.objects.create(**validated_data)

class asset_logo_serializer(serializers.Serializer):
    logo_url=serializers.CharField(required=False,max_length=50)
    email=serializers.CharField(required=True,max_length=30)
    def create(self, validated_data):
        return asset_logo.objects.create(**validated_data)

class creative(serializers.Serializer):
    email = serializers.CharField(required=True,max_length=30)
    image_url=serializers.CharField(required=False,max_length=50)
    logo_url=serializers.CharField(required=False,max_length=50)
    image_x=serializers.IntegerField(required=False)
    image_y=serializers.IntegerField(required=False)
    logo_x=serializers.IntegerField(required=False)
    logo_y=serializers.IntegerField(required=False)
    strings=serializers.CharField(required=False,max_length=200)
    strings_x=serializers.CharField(required=False,max_length=200)
    strings_y=serializers.CharField(required=False,max_length=200)
    def create(self, validated_data):
        return creative.objects.create(**validated_data)




