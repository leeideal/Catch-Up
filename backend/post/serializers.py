from rest_framework import serializers

from users.models import User
from .models import Post, Review
from users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('post', )



class PostSerializer(serializers.ModelSerializer):
    # reviews = ReviewSerializer(many=True, read_only=True)
    # writer = serializers.CharField(read_only=True)
    
    # def get_writer(self, *args, **kwargs):
    #     writer = super(UserSerializer, self).get_fields(*args, **kwargs)
    # writer = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)

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