from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from .models import *

# Create your views here.
def index(request):
    list_of_usage = Usage.objects.all()
    return render(request, "index.html", {
        "sorted_list": list_of_usage
    })

def register(request):
    return render(request, "register.html")

def info(request):
    return render(request, "info.html")