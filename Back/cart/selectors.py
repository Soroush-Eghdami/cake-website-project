from django.contrib.auth import get_user_model
from .models import Cart

User = get_user_model()


def cart_get(*, user : User) -> Cart:
    return  Cart.objects.get(user=user)