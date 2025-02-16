from django.db import models
from django.contrib.auth.models import User

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)  # Associate with a user
    pax = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Booking by {self.user.username if self.user else 'Anonymous'}: {self.pax} pax - ₱{self.price}"
