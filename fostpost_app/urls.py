<<<<<<< HEAD
from __future__ import absolute_import, unicode_literals

=======
>>>>>>> 1b7a91608413afc8ee146249d6b9e15d3087b8f9
from django.conf.urls import url

from . import views

urlpatterns = [
<<<<<<< HEAD
    # Basic pages
    url(r'^$', views.index, name='index')
    url(r'^font/$', views.font, name='font'),
    url(r'^create/$', views.create, name='create'),
    
]
=======
    url(r'^register/', views.RegisterView, name='register'),
]
>>>>>>> 1b7a91608413afc8ee146249d6b9e15d3087b8f9
