from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Content
from .serializers import UserSerializer, ContentSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ContentView(viewsets.ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer