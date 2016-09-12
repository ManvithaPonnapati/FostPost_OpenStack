
from __future__ import absolute_import, unicode_literals

from django.conf.urls import patterns,url

from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = patterns('',

    # Basic pages
    url(r'^$', views.index, name='index'),
    url(r'^font/',views.font,name='font'),
    url(r'^create/',views.create,name='create'),
    url(r'^emails/', views.email_list, name='email_list'),
    url(r'^authenticate_email/', views.authenticate_email, name='authenticate_email'),
    url(r'^api/unsplash_images/', views.unsplash_images, name='unsplash_images'),
    url(r'^api/get_colors/', views.get_colors, name='get_colors'),
    url(r'^api/drag_upload/', views.drag_upload, name='drag_upload'),
    url(r'^api/upload_logo/', views.upload_logo, name='upload_logo'),
    url(r'^api/get_the_next_word/', views.get_the_next_word, name='get_the_next_word'),
    url(r'^api/save_creative/',views.save_creative,name='save_creative'),
    url(r'^api/get_all_uploaded_images/',views.get_all_uploaded_images,name='get_all_uploaded_images'),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT,'show_indexes':True}),
)
