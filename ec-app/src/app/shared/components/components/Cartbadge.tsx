import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CartBadge: React.FC = () => {
  const { totalQuantity } = useCart();
  return (
    <span id='cart-badge' className='cart-badge'>
      {totalQuantity}
    </span>
  );
};

export default CartBadge;
