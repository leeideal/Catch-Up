from rest_framework import serializers
from .models import Post, Review


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('post', )



class PostSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:

        model = Post

        fields = (
            'title',
            'content',
            'created_at',
            'updated_at',
            'sub_content',
            'like_users',
            'view_users',
            'tag',
            'reviews'
        )
        