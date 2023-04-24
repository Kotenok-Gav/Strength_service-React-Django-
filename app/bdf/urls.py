from django.urls import path
from .import views

urlpatterns = [
    path('', views.home, name='home'),
    path('bdf/', views.bdf_list, name='bdf_list'),
]
