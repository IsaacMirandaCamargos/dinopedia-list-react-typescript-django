from rest_framework.decorators import api_view
from rest_framework.response import Response

from dinosaurs.serializers import DinosaurSerializer
from .models import Dinosaur

# Create your views here.
@api_view(['GET'])
def get_dinosaurs(request):
    dinosaurs_queryset = Dinosaur.objects.all()
    dinosaurs_serializer = DinosaurSerializer(dinosaurs_queryset, many=True)
    return Response(dinosaurs_serializer.data)
