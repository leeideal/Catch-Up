from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    nickname = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=20)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    introduction = models.TextField(null=True, default='')
    image = models.ImageField(null=True)
    coin = models.IntegerField()
    star = models.FloatField()
    # chat_info = models. # chatting 클래스 참조
    # reviews = models. # review 모델 참조