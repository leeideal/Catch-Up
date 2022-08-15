from django.urls import path
from .views import *

app_name = 'posts'
urlpatterns = [
    path('', post_create, name='post'),
    path('<int:post_pk>/', post_detail, name='post_detail'),
    path('<int:post_pk>/review/', review_create, name='review'),
    path('review/<int:review_pk>/', review_detail, name='review_detail'),
]
