from django.urls import path
from .views import BookingAPIView

urlpatterns = [
    path('booking/', BookingAPIView.as_view(), name='booking'),
]
