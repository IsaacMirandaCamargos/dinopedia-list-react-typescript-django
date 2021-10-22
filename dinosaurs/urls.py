from django.urls import path
from .views import (
    get_dinosaurs
)

urlpatterns = [
    path('', get_dinosaurs, name="get_dinosaurs"),
]