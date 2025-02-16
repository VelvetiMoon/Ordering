from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Booking
from .serializers import BookingSerializer

class BookingAPIView(APIView):
    def post(self, request):
        user = request.user if request.user.is_authenticated else None  # Get the logged-in user
        data = request.data
        data['user'] = user.id if user else None  # Add user ID to the data

        serializer = BookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=user)  # Explicitly set the user
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
