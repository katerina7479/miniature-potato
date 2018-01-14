from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth import views as auth_views

from rest_framework.authtoken import views as drf_views

admin.autodiscover()

import hello.views

# Examples:
# url(r'^$', 'hello.views.home', name='home'),
# url(r'^blog/', include('blog.urls')),

urlpatterns = [
    url(r'^$', hello.views.index, name='index'),
    url(r'^admin/', admin.site.urls, name='admin'),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'^oauth/', include('social_django.urls', namespace='social')),
    url(r'^auth$', drf_views.obtain_auth_token, name='auth'),
    url(r'^settings/$', hello.views.settings, name='settings'),
    url(r'^settings/password/$', hello.views.password, name='password'),
    url(r'^home', hello.views.home, name='home'),
    url(r'^db', hello.views.db, name='db'),

]
