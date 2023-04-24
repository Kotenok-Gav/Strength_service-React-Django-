from rest_framework import serializers
from .models import Rockets_bdf


class bdfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rockets_bdf
        fields = "__all__"