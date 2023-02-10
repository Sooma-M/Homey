from django.urls import URLPattern, path
from . import views

#www.site.com/../......
urlpatterns = [
    path('', views.index, name='index'),
    path('contact', views.contact, name='contact'), 
    path('furniture',views.Furniture, name='fur'),
]