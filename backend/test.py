from django.test import TestCase
from django.urls import reverse,resolve
from .views import start_view
class Test_start_view(TestCase):
    def setUp(self):
        self.list=reverse('start')
    def test_list_url(self):
        self.assertEquals(resolve(self.list).func.view_class,start_view)
    def test_list_templete_status_code_and_Template_get(self):
        respanse = self.client.get(self.list)
        self.assertEquals(respanse.status_code,200)
        self.assertTemplateUsed(respanse, 'start_view.html')
