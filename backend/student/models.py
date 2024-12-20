from django.db import models

# Create your models here.

class Student(models.Model):
  name = models.CharField(max_length=200)
  email = models.EmailField(unique=True)
  age = models.PositiveIntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
