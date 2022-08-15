from django.urls import path
from .views import *

app_name = 'chat'
urlpatterns = [
    path('createroom/', create_chatroom, name='create_room'),
    path('<str:user_id>/room/', list_chatroom, name='list_chatroom'),
    path('<str:user_id>/room/<int:chatroom_id>/', chatlist_roomdelete, name='chatlists_roomdelete'),
]
