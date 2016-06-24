
from __future__ import absolute_import, unicode_literals

from django.conf.urls import patterns,url

from . import views

urlpatterns = patterns('',

    # Basic pages
    url(r'^$', views.index, name='index'),
    url(r'^font/',views.font,name='font'),
    url(r'^create/',views.create,name='create'),
    url(r'^emails/', views.email_list, name='email_list'),
)
