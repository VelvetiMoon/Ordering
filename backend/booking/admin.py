from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "pax", "price", "created_at")  # Display these fields in admin
    search_fields = ("user__username", "pax", "price")  # Enable search functionality
    list_filter = ("created_at", "pax")  # Add filters on the right side
    ordering = ("-created_at",)  # Order by latest booking first
