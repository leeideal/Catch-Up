from django.urls import path
from .views import *

app_name = 'chat'
urlpatterns = [
    path('createroom/', create_chatroom, name='create_room'),
    path('room/', list_chatroom, name='list_chatroom'),
    path('room/<int:chatroom_id>/', chatlist_roomdelete, name='chatlists_roomdelete'),
]
