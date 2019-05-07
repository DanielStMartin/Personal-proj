select * from UserCart
join product on product.product_id = UserCart.product_id
where UserCart.user_id = $1
order by UserCart.user_cart_id asc;