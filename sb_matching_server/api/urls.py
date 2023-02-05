from django.urls import path, include
from . import views
from rest_framework import routers
from api.views import UserinfoList

# router = routers.DefaultRouter()
# router.register(r'userinfos', UserinfoList, 'UserinfoList')

urlpatterns = [
    path('userinfo', UserinfoList.as_view()),
]