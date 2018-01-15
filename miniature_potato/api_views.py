
from rest_framework import viewsets

from miniature_potato.models import Todo, User
from miniature_potato.serializers import TodoSerializer, UserSerializer
from rest_framework import serializers


class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    queryset = Todo.objects.all().order_by('-createdAt')
    serializer_class = TodoSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
