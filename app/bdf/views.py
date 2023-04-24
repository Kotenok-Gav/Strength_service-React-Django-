from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_200_OK

from .models import Rockets_bdf
from .serializers import bdfSerializer



def home(request):
    return render(request, 'home.html')


@api_view(["GET", "POST"])
def bdf_list(request):
    if request.method == "GET":
        bdf = Rockets_bdf.objects.all()
        serializer = bdfSerializer(bdf, many = True)
        return Response(serializer.data)
    
    if request.method == "POST":
        text = request.data.get("text")
        start_rocket = request.data.get("start_rocket")
        bd = Rockets_bdf.objects.create(text=text, start_rocket=start_rocket)
        serializer = bdfSerializer(bd)
        return Response(serializer.data, status=HTTP_200_OK)


