from django.db import transaction
from django.contrib.auth import get_user_model
from .models import Order, OrderItem
from cart.selectors import cart_get

User = get_user_model()

@transaction.atomic
def create_order_from_cart(*, 
    user: User,
    full_name: str, 
    phone_number: str, 
    city: str, 
    delivery_address: str, 
    payment_method: str,
    notes: str = None
) -> Order:
    
    
    cart = cart_get(user=user)
    cart_items = cart.items.all()
    if not cart_items:
        raise ValueError("Cart is empty. Cannot create an order.")
    
    order = Order.objects.create(
        user = user,
        full_name = full_name,
        phone_number = phone_number,
        city = city,
        delivery_address = delivery_address,
        payment_method = payment_method,
        notes = notes,
        total_price = 0
    )
    
    total = 0 
    for item in cart_items:
        OrderItem.objects.create(
            order = order,
            product = item.product,
            product_name = item.product.name,
            price_at_purchase = item.product.price,
            old_price_at_purchase = item.product.old_price,
            quantity = item.quantity
        )
        total += item.product.price * item.quantity
            
    order.total_price = total
    order.save()
    
    return order


def order_update_status(*, order_id: int, new_status: str) -> Order:
    order = Order.objects.get(id=order_id)
    order.status = new_status
    order.save()
    return order