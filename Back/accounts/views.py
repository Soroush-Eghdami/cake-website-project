from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from .services import user_create
from .serializers import UserRegisterInputSerializer, UserOutputSerializer



class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request):
        pass