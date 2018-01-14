from django.conf.urls import include, url
from django.urls import path

from django.contrib import admin
from django.contrib.auth import views as auth_views
admin.autodiscover()

import hello.views

# Examples:
# url(r'^$', 'gettingstarted.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', hello.views.index, name='index'),
    url(r'^times', hello.views.times, name='times'),
    url(r'^db', hello.views.db, name='db'),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^oauth/', include('social_django.urls', namespace='social')),  # <--
    path('admin/', admin.site.urls),
]
