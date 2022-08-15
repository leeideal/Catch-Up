from tracemalloc import get_object_traceback
from django.shortcuts import render, get_object_or_404
# Response 추가
from rest_framework.response import Response
# HTTP method를 처리하기 위한 api_view 데코레이터 추가
from rest_framework.decorators import api_view

from .models import *
# serializers에서 Postserializer를 가져옴
from .serializers import PostSerializer, ReviewSerializer

# 포스트 리스트 뷰


@api_view(['GET', 'POST'])
def post_create(request):
    # GET 방식을 받아왔을 때
    if request.method == 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(data=serializer.data)

    if request.method == 'POST':
        serializer = PostSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save(writer = get_object_or_404(User, id=request.data['writer']))
            return Response(data=serializer.data)

@api_view(['GET','PATCH','DELETE'])
def post_detail(request, post_pk):
    post = get_object_or_404(Post, pk=post_pk)

    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)
    elif request.method == 'PATCH':
        serializer = PostSerializer(instance=post, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        post.delete()
        data={
            'post':post_pk
        }
        return Response(data)

@api_view(['GET','POST'])
def review_create(request, post_pk):
    post = Post.objects.get(pk=post_pk)

    if request.method == 'GET':
        reviews = Review.objects.filter(post=post)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(data=serializer.data)
    
    elif request.method == 'POST':
        request.data['post'] = post_pk
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(data=serializer.data)

@api_view(['GET','PATCH','DELETE'])
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == 'GET':
        serializer = ReviewSerializer(review)
        return Response(serializer.data)

    elif request.method == 'PATCH':
        serializer = ReviewSerializer(instance=review, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
        
    elif request.method == 'DELETE':
        review.delete()
        data={
            'review':review_pk
        }
        return Response(data)