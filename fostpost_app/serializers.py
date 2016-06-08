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