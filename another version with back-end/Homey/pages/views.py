from django.shortcuts import render

# Create your views here.
import email
from django.shortcuts import render
from .models import Contact
# Create your views here.

def contact(request):
    if request.method == "POST":
        n = request.POST.get('name') 
        e = request.POST.get('email') 
        a = request.POST.get('area')
        data = Contact(name=n, email=e, area=a) 
        data.save()
    return render(request, 'contact.html')

def index(request):
    return render(request, 'index.html')

def Furniture(request):
    return render(request, 'Furniture.html')