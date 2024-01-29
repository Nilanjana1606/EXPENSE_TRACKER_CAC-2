from django.urls import path,include
from . import views

urlpatterns = [
    path('dashboard',views.menu,name="dashboard"),
    path('calender',views.calendar,name="calender")

]