from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  # Show username instead of ID

    class Meta:
        model = Booking
        fields = ['id', 'user', 'pax', 'price', 'created_at']
