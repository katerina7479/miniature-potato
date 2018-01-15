
from rest_framework import viewsets

from miniature_potato.models import Todo
from miniature_potato.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Todo.objects.all().order_by('-createdAt')
    serializer_class = TodoSerializer
