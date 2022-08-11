from tkinter import CASCADE
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.validators import MinValueValidator, MaxValueValidator
#from post.models import Review


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    nickname = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=20)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    introduction = models.TextField(null=True)
    image= models.ImageField(upload_to = "profile/", blank=True, null=True) # 사용자들이 시간표를 올릴 때마다 media/profile에 저장됨
    coin = models.IntegerField(default=100)
    star = models.IntegerField(default=5, validators=[MinValueValidator(0), MaxValueValidator(5)])
    # chat_info = models. # chatting 클래스 참조
    # reviews = models.ForeignKey(Review, on_delete=models.CASCADE) # review 모델 참조

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()