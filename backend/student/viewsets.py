from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer

# Handle all crud automatically by using viewsets

class StudentViewSet(viewsets.ModelViewSet):
  serializer_class = StudentSerializer

  def get_queryset(self):
    return Student.objects.all()