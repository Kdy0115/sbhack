from rest_framework import serializers
from matching_server.models import CustomUser, Matching, Messages, Block

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 
            'username',
            'first_name',
            'last_name',
            'email',
            'gender',
            'branch',
            'age',
            'grade',
            'job',
            'department',
            'project',
            'introduction',
            'hobby',
            'matching_status',
            'profile',
            'matching_id'
        ]

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 
            'password',
            'username',
            'first_name',
            'last_name',
            'email',
            'gender',
            'branch',
            'age',
            'grade',
            'job',
            'department',
            'project',
            'introduction',
            'hobby',
            'matching_status',
            'profile',
            'matching_id'
        ]        

class MatchingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Matching
        fields = [
            'id',
            'status',
            'created_at',
            'updated_at'
        ]

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = [
            'id',
            'status',
            'matching_id',
            'from_user_id',
            'created_at',
            'updated_at'
        ]

class BlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Block
        fields = [
            'id',
            'user_id',
            'created_at',
            'updated_at'
        ]