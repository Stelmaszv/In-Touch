from django.urls import path
from . import views
urlpatterns = [
    path('register/',views.register.as_view(),name="register"),
    path('login/',views.login.as_view(),name="login"),
    path('emailAvailable/<str:email>/',views.emailAvailable.as_view(),name="emailAvailable"),
]