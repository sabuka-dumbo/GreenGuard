from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Usage(models.Model):
    usage_type = models.CharField(max_length=150)
    date = models.DateField()
    reason = models.CharField()