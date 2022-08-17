from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'is_superuser', 'username', 'email')

class ProfileSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Profile
        fields = (
            'id', 
            'nickname', 
            'image', 
            'introduction', 
            'coin', 
            'star', 
            #'room_count',
            )