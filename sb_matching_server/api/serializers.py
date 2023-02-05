from rest_framework import serializers
from matching_server.models import Userinfo

class UserinfoSerializer(serializers.ModelSerializer):
    # created = serializers.ReadOnlyField()
    # completed = serializers.ReadOnlyField()

    class Meta:
        model = Userinfo
        fields = ['id', 'user_name', 'branch']