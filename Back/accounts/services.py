# accounts/services.py
from django.db import transaction
from accounts.models import User
from cart.models import Cart

@transaction.atomic
def user_create(*, email: str, username: str, password: str) -> User:
    user = User(email=email, username=username)
    user.set_password(password)
    user.full_clean()
    user.save()

    Cart.objects.create(user=user)  # cart creation lives here, explicitly

    return user