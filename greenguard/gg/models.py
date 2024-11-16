from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Usage(models.Model):
    usage_type = models.CharField(max_length=150)
    date = models.DateField()
    reason = models.CharField(max_length=150)
    usage_value = models.CharField(max_length=150)
    member = models.ForeignKey(User, related_name="member")

    def __str__(self):
        return f"Member, ${self.member}, updated usage data"