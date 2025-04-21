import React from 'react';
import { useCart } from '../../../shared/contexts/CartContext';
import { formatPrice } from '../../../core/helpers/utils';

const CartSummary: React.FC = () => {
  const { totalQuantity, totalPrice } = useCart();

  return (
    <div className='cart-summary'>
      <h3 className='summary-title'>Cart Totals</h3>
      <div className='summary-details'>
        <p className='summary-detail'>
          Total Items:
          <span className='summary-value'>{totalQuantity}</span>
        </p>
        <p className='summary-detail'>
          Total Price:
          <span className='summary-value'>{formatPrice(totalPrice)}</span>
        </p>
      </div>
      <div className='summary-action'>
        <button className='btn-checkout'>Check Out</button>
      </div>
    </div>
  );
};

export default CartSummary;
