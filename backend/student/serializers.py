from rest_framework import serializers
from student.models import Student


class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ['id', 'name', 'email', 'age', 'created_at', 'updated_at']