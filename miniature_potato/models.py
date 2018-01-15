from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    text = models.TextField()
    createdAt = models.DateTimeField('created_at', auto_now_add=True)
    completedAt = models.DateTimeField('completed_at', null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
