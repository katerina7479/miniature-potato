import os

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

from .models import Greeting


def index(request):
    text = 'This is the index'
    return HttpResponse('<pre>' + text + '</pre>')


@login_required
def home(request):
    return HttpResponse('<pre>This is your home</pre>')


@login_required
def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})
