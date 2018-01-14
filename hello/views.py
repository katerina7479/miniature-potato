import os

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

from .models import Greeting


def index(request):
    text = 'This is the index'
    return HttpResponse('<pre>' + text + '</pre>')


@login_required
def times(request):
    times = int(os.environ.get('TIMES',3))
    return HttpResponse('Hello! ' * times)


@login_required
def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})
