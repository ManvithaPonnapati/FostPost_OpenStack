from __future__ import absolute_import, unicode_literals

from django.conf.urls import url

from . import views

urlpatterns = [
    # Basic pages
    url(r'^$', views.index, name='index')
    url(r'^font/$', views.font, name='font'),
    url(r'^create/$', views.create, name='create'),
    
]
