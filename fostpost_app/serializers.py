from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

<<<<<<< HEAD
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



        
=======
from fostpost_app.models import CraftCloud_Account

class account_by_email_serializer(serializers.ModelSerializer):
    email=serializers.CharField(required=True)

class CraftCloud_AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = CraftCloud_Account
        fields = ('id', 'email', 'username', 'created_at','password',
                  'confirm_password',)
        read_only_fields = ('created_at')

        def create(self, validated_data):
            return CraftCloud_Account.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.username = validated_data.get('username', instance.username)
            instance.save()

            password = validated_data.get('password', None)
            confirm_password = validated_data.get('confirm_password', None)

            if password and confirm_password and password == confirm_password:
                instance.set_password(password)
                instance.save()

            update_session_auth_hash(self.context.get('request'), instance)

            return instance
>>>>>>> 6948fa90a54daf6059087f24291901dd081393c4
