from rest_framework import serializers
from . import models
from nomadgram.users import models as users_models
from taggit_serializer.serializers import (TagListSerializerField,
TaggitSerializer)

class SmallImageSerializer(serializers.ModelSerializer):
    
    """Used for notification"""
    
    class Meta:
        model = models.Image
        field = (
            'file',
        )

class CountImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'comment_count',
            'like_count',
        )


class LikeSerializer(serializers.ModelSerializer):
    
    #image = ImageSerializer() !!image field is showed up by serializer not by id(foriegnkey)

    class Meta:
        model = models.Like
        fields = '__all__'


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = users_models.User
        fields = (
            'username',
            'profile_image',
        )
class CommentSerializer(serializers.ModelSerializer):
    
    creator = FeedUserSerializer(read_only = True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
        )

class ImageSerializer(TaggitSerializer,serializers.ModelSerializer):
    
    like_set = LikeSerializer(many = True) #related도 serializer로 대체 가능.
    comments = CommentSerializer(many = True)
    tags = TagListSerializerField()

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',#model엔 없지만 foriegn key에 의해 자동 작성됨. related name 작성 가능.
            'like_count',
            'like_set',
            'tags',
            'created_at',
        )

class InputImageSerializer(serializers.ModelSerializer):
    
    file = serializers.FileField(required = False)

    class Meta:
        model = models.Image
        fields = (
            'file',
            'location',
            'caption',
        )
