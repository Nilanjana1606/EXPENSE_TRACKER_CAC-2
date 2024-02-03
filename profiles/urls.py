from django.urls import path
from . import views

urlpatterns = [
    path('my-profile/', views.my_profile, name='my_profile'),
    path('update-profile/', views.update_profile, name='update_profile'),
]
