from django.db import models

from django.db import models

class Package(models.Model):
    pax = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

