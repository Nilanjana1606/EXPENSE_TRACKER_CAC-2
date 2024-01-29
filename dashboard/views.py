from django.shortcuts import render

# Create your views here.
def menu(request):
    return render(request,"Dashboard/dashboard.html")

def calendar(request):
    return render(request,"CALENDAR/")