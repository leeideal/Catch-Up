from rest_framework import serializers
from .models import *

#base64 serializer
from django.conf import settings

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'is_superuser', 'username', 'email')

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = (
            'id', 
            'nickname', 
            'introduction', 
            'image',
            'coin', 
            'star', 
            )
