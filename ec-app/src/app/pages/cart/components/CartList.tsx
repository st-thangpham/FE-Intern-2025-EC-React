// src/components/CartList.tsx
import React from 'react';

import { RootState } from '@shared/redux/store';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

const CartList: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <ul id="list-cart-items" className="cart">
      {items.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
