from rest_framework import serializers
from .models import User, Content

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','url','userName','password')
        extra_kwargs = {'password': {'write_only': True}}

class ContentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Content
        fields = ('id','url','img','caption','user_id')