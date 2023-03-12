from .serializers import UserSerializer, AuthUserSerializer
from matching_server.models import CustomUser
from rest_framework import generics, permissions
from django.db import IntegrityError
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return CustomUser.objects.all()
    
    # def perform_create(self, serializer):
    #     serializer.save(self.request.user)

class UserRetrieve(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return CustomUser.objects.filter(pk=user.id)    

class AuthUserRetrieveUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = AuthUserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return CustomUser.objects.filter(pk=user.id)
    
    def perform_update(self, serializer):
        instance = serializer.save()    

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = CustomUser.objects.create_user(
                username=data['username'],
                password=data['password'],
                grade=data['grade']
                )
            user.save()
            token = Token.objects.create(user=user)
            return JsonResponse({'token':str(token)}, status=201)
        except IntegrityError:
            return JsonResponse({
                'erorr':'username token. choose another username'}, 
                status=400)
        
@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)['loginRequest']
        user = authenticate(
            request,
            username=data['username'],
            password=data['password'])
        if user is None:
            return JsonResponse(
                {'error':'unable to login. check username and password'},
                status=400)
        else:
            try:
                token = Token.objects.get(user=user)
            except:
                token = Token.objects.create(user=user)
            return JsonResponse({'token':str(token)}, status=201)
        
# @csrf_exempt
# def get_token(request, user_id):
#     if request.method == 'POST':
#         data = JSONParser().parse(request)

        