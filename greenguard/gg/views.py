from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def register(request):
    return render(request, "register.html")

def info(request):
    return render(request, "info.html")