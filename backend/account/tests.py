from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from .serializer import emailValid
from django.test import Client
from .models import Account

class email_Valid_test(APITestCase):

    url_test = reverse("account:emailAvailable", kwargs={"email": "test@gmail.com"})

    def test_status_test(self):
        response = self.client.get(self.url_test)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_if_email_not_Available(self):
        Account.object.create_user(
            email='test@gmail.com',
            password='yy54y$$@#$WFWEFWEf',
            sex="male",
            birthday= "1989-03-13"
        )
        serializer_data = emailValid(data={'email': "test@gmail.com", 'stan': False})
        self.assertEqual(serializer_data.setData(),
            {
                'email': 'test@gmail.com',
                'stan': True,
                'Available': False
             }
        )

    def test_if_email_Available(self):
        serializer_data = emailValid(data={'email': "test@gmail.com", 'stan': False})
        self.assertEqual(serializer_data.setData(),
            {
                'email': 'test@gmail.com',
                'stan': True,
                'Available': True
            }
        )

    def test_invalid_email(self):
        serializer_data = emailValid(data={'email': "testgmail.com", 'stan': False})
        self.assertEqual(serializer_data.setData(),
            {
                'email': 'testgmail.com',
                'stan': False,
                'Available': True
             }
        )

class register_Valid_test(APITestCase):

    url_test = reverse("account:register")

    def setUp(self):
        self.client = Client()

    def test_POST(self):

        dataTest= {
            "email": "eqwe@ewqe.pl",
            "password": "Samlogan007!!",
            "sex": "male",
            "birthday": "2020-07-31T16:30:00Z"
        }

        response=self.client.post(self.url_test,dataTest)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)



