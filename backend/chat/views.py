from django.shortcuts import render, get_object_or_404
from .models import *
from post.models import *
from users.models import *
from .serializers import *
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view

@api_view(['POST'])
def create_chatroom(request):
    #POST방식일 때 채팅방 생성
    if request.method == 'POST':
        current_post = get_object_or_404(Post, pk=request.data['post_id'])
        current_user = request.user
        serializer = ChatroomSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                post = current_post, 
                questioner = current_user,
                answerer = current_post.writer)
            return Response(data=serializer.data)

@api_view(['GET'])
def list_chatroom(request):
    if request.method == 'GET':
        current_user = request.user
        chatrooms = Chatroom.objects.all()
        user_chatrooms = []
        for room in chatrooms:
            if room.is_user_in_talkers(current_user):
                user_chatrooms.append(room)
        serializer = ChatroomSerializer(user_chatrooms, many=True)
        return Response(data=serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
def chatlist_roomdelete(request, chatroom_id):
    room = get_object_or_404(Chatroom, id=chatroom_id)
    if request.method == 'GET':
        chats = Chat.objects.filter(chatroom = room).order_by('created_at')
        serializer = ChatListSerializer(chats, many=True)
        return Response(data=serializer.data)
    elif request.method == 'POST':
        current_user = request.user
        serializer = ChatListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(
                chatroom = room,
                writer = current_user, 
                content = request.data['content'])
            return Response(data=serializer.data)
    elif request.method == 'DELETE':
        room.delete()
        data={
            'chatroom':chatroom_id
        }
        return Response(data)

