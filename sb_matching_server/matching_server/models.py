from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager
# Create your models here.
    
class Matching(models.Model):
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

class Messages(models.Model):
    status = models.CharField(max_length=100)
    matching_id = models.ForeignKey(Matching, on_delete=models.CASCADE, related_name='message_matching_id')
    from_user_id = models.ForeignKey(Matching, on_delete=models.CASCADE, related_name='message_user_id')
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

class CustomUser(AbstractBaseUser):

    username = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    branch = models.CharField(max_length=100)
    age = models.CharField(max_length=100)
    grade = models.IntegerField()
    job = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    project = models.CharField(max_length=100)
    introduction = models.CharField(max_length=100)
    hobby = models.CharField(max_length=100)
    matching_status = models.CharField(max_length=100)
    profile = models.CharField(max_length=100)
    matching_id = models.ForeignKey(Matching, on_delete=models.CASCADE, related_name='user_matching_id')
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    objects = UserManager()
    # username = None
    email = models.EmailField(('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.user_name
    
class Block(models.Model):
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='block_user_id')
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()