<<<<<<< HEAD
from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    email = serializers.CharField(required=True, allow_blank=False, max_length=100)
    
    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validated data.
        """
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `User` instance, given the validated data.
        """
        instance.email = validated_data.get('email', instance.email)
        instance.save()
        return instance
=======
from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

from fostpost_app.models import CraftCloud_Account


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
>>>>>>> 20ff531a66d8e8117778f42582682b6842d4bf3c
