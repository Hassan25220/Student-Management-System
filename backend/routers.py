from rest_framework import routers
# from django.urls import path, include
from student.viewsets import StudentViewSet

# We have use viewsets for crud so that we need to use router for automatically generate urls
router = routers.SimpleRouter()
# Base url for api
router.register(r'students', StudentViewSet, basename='student')