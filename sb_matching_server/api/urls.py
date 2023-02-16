from django.urls import path, include
from . import views
from rest_framework import routers
from api.views import UserListCreate, UserRetrieveUpdateDestroy

# router = routers.DefaultRouter()
# router.register(r'userinfos', UserinfoList, 'UserinfoList')

urlpatterns = [
    path('user/', UserListCreate.as_view()),
    path('user/<int:pk>', UserRetrieveUpdateDestroy.as_view()),
    path('signup/', views.signup),
]