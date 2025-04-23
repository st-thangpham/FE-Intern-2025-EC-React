import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../../../shared/contexts/CartContext';

const CartList: React.FC = () => {
  const { items } = useCart();

  return (
    <>
      <ul id="list-cart-items" className="cart">
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default CartList;
