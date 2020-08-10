from rest_framework import serializers
from .models import  Account
class emailValid(serializers.Serializer):

    email = serializers.EmailField()
    stan = serializers.BooleanField()

    def ifAvailable(self):
        if not Account.objects.filter(email=self.data['email']):
            return  True
        return False

    def setData(self,email):
        stan = False
        if self.is_valid():
            stan=True
        self.dataShow={
            'email':self.data['email'],
            'stan' : stan,
            'Available': self.ifAvailable()
        }


