from rest_framework.views import  APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import emailValid
from .serializer import registerSrializer
from rest_framework import generics
from .models import Account

class register(generics.CreateAPIView):
    queryset=Account.objects.all()
    serializer_class = registerSrializer

class login(APIView):
    pass

class emailAvailable(APIView):

    def get(self, request, *args, **kwargs):
        email = self.kwargs.get("email")
        obj=emailValid(data={'email':email,'stan':False})
        obj.setData()
        return Response(data=obj.dataShow, status=status.HTTP_200_OK)
