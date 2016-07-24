
from __future__ import absolute_import, unicode_literals

from django.conf.urls import patterns,url

from . import views

urlpatterns = patterns('',

    # Basic pages
    url(r'^$', views.index, name='index'),
    url(r'^font/',views.font,name='font'),
    url(r'^create/',views.create,name='create'),
    url(r'^emails/', views.email_list, name='email_list'),
    url(r'^authenticate_email/', views.authenticate_email, name='authenticate_email'),
    url(r'^api/unsplash_images/', views.unsplash_images, name='unsplash_images'),
    url(r'^api/get_colors/', views.get_colors, name='get_colors'),
)
