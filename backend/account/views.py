
from rest_framework.views import  APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import emailValid

class register(APIView):
    pass

class login(APIView):
    pass

class emailAvailable(APIView):

    def get(self, request, id=None, *args, **kwargs):
        email = self.kwargs.get("email")
        obj=emailValid(data={'email':email,'stan':False})
        obj.setData(email)
        return Response(data=obj.dataShow, status=status.HTTP_200_OK)
