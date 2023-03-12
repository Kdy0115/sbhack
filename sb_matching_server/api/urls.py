from django.urls import path, include
from . import views
from rest_framework import routers
from api.views import UserList, UserRetrieve, signup, AuthUserRetrieveUpdate

# router = routers.DefaultRouter()
# router.register(r'userinfos', UserinfoList, 'UserinfoList')

urlpatterns = [
    path('users', UserList.as_view()),
    path('users/<int:pk>', UserRetrieve.as_view()),
    path('auth/<int:pk>', AuthUserRetrieveUpdate.as_view()),
    path('signup', signup),
    path('login', views.login),
]