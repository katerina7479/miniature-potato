from django.contrib.auth.models import User
from .models import Todo

from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class TodoSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Todo
        fields = ('id', 'text', 'createdAt', 'completedAt', 'user')
