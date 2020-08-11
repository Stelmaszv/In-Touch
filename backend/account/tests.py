from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from .serializer import emailValid
from django.urls import resolve
from .views import emailValid as emailValidView
import json
class abstrat_Test(APITestCase):
    url_test = reverse("account:emailAvailable", kwargs={"email": "stelmaszv@gmail.com"})
    def test_view_match(self):
        self.assertEquals(resolve(self.url_test).func.view_class, emailValidView)
    def test_json_match(self):
        serializer_data = emailValid(data={'email':"stelmaszv@gmail.com",'stan':False})
        serializer_data.setData()
        response = self.client.get(self.url_test)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_data = json.loads(response.content)
        self.assertEqual(serializer_data.dataShow, response_data)