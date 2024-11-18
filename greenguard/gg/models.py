from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Company(models.Model):
    company_name = models.CharField(max_length=150)
    email_address = models.CharField(max_length=250)
    address_first = models.CharField(max_length=500)
    address_second = models.CharField(max_length=500)

class Usage(models.Model):
    usage_type = models.CharField(max_length=150)
    date = models.DateField()
    reason = models.CharField(max_length=150)
    usage_value = models.CharField(max_length=150)
    member = models.ForeignKey(User, on_delete=models.SET_NULL, related_name="member", null=True, blank=True)

    def __str__(self):
        return f"Member, ${self.member}, updated usage data"