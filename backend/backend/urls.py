from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the homepage!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('orders.urls')),  # Include app-specific URLs
    path('', home),  # Root URL pattern
    path('api/', include('booking.urls')),
]
