from .serializers import UserinfoSerializer
from matching_server.models import Userinfo
from rest_framework import generics

class UserinfoList(generics.ListCreateAPIView):
    serializer_class = UserinfoSerializer
    queryset = Userinfo.objects.all()