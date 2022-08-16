from rest_framework import serializers
from .models import *

class ChatroomSerializer(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(read_only=True)
    questioner = serializers.PrimaryKeyRelatedField(read_only=True)
    answerer = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Chatroom
        fields = '__all__'

class ChatListSerializer(serializers.ModelSerializer):
    chatroom = serializers.PrimaryKeyRelatedField(read_only=True)
    writer = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Chat
        fields = '__all__'