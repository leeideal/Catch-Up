from rest_framework import serializers

from users.models import User
from .models import Post, Review
from users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    writer = serializers.PrimaryKeyRelatedField(read_only=True)
    post = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = Review
        fields = '__all__'



class PostSerializer(serializers.ModelSerializer):
    
    writer = serializers.PrimaryKeyRelatedField(read_only=True)
    # reviews = ReviewSerializer(many=True, read_only=True)


    class Meta:

        model = Post

        fields = (
            'id',
            'title',
            'writer',
            'content',
            'created_at',
            'updated_at',
            'sub_content',
            'like_users',
            'view_users',
            'tag',
            'reviews'
        )