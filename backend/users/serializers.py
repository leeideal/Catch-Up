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
            'churu', 
            'star', 
            )

class ChuruSerializer(serializers.ModelSerializer):
    churu = serializers.ReadOnlyField()
    churu_charging = 0
    class Meta:
        model = Profile
        fields = ('id', 'churu', 'churu_charging')
