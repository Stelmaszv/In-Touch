from django.urls import path
from . import views
app_name = 'account'
urlpatterns = [
    path('register/',views.register.as_view(),name="register"),
    path('emailAvailable/<str:email>/',views.emailAvailable.as_view(),name="emailAvailable"),
]