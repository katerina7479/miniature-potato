from django.contrib.auth.models import User
from .models import Todo

from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class TodoSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField(required=True)
    createdAt = serializers.DateTimeField(required=False)
    completedAt = serializers.DateTimeField(required=False, allow_null=True)
    user = serializers.PrimaryKeyRelatedField(
        # set it to read_only as we're handling the writing part ourselves
        read_only=True,
        required=False
    )

    def perform_create(self, serializer):
        print(self.request)
        serializer.save(user=self.request.user)
