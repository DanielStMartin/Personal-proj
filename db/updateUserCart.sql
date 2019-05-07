update UserCart
set quantity = $2
where user_cart_id = $1;