from tkinter import CASCADE
from django.db import models
from users.models import User

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    sub_content  = models.TextField()
    like_users = models.ManyToManyField(User, blank=True, related_name='likes_user', through='Like')
    view_users = models.IntegerField(default=0)
    # chur = # 츄르 모델 참조
    tag = models.CharField(max_length=20)


    def __str__(self):
        return self.title

class Review(models.Model):
    writer = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    rate = models.Choices()
    context = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)