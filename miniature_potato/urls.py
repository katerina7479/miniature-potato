from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth import views as auth_views

from rest_framework.authtoken import views as drf_views
from rest_framework import routers

admin.autodiscover()

import miniature_potato.views as app_views
import miniature_potato.api_views as api_views

router = routers.DefaultRouter()
router.register(r'todos', api_views.TodoViewSet)
router.register(r'users', api_views.UserViewSet)


urlpatterns = [
    url(r'^$', app_views.index, name='index'),
    url(r'^admin/', admin.site.urls, name='admin'),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'^oauth/', include('social_django.urls', namespace='social')),
    url(r'^auth$', drf_views.obtain_auth_token, name='auth'),
    url(r'^settings/$', app_views.settings, name='settings'),
    url(r'^settings/password/$', app_views.password, name='password'),
    url(r'^home', app_views.home, name='home'),
    url(r'^api/', include(router.urls)),
]
