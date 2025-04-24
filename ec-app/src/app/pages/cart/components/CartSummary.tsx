import React from 'react';

import { RootState } from '@shared/redux/store';
import { useSelector } from 'react-redux';

import { formatPrice } from '@core/helpers/utils';

const CartSummary: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );
  const totalPrice = items.reduce(
    (sum: number, item: any) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h3 className="summary-title">Cart Totals</h3>
      <div className="summary-details">
        <p className="summary-detail">
          Total Items:
          <span className="summary-value">{totalQuantity}</span>
        </p>
        <p className="summary-detail">
          Total Price:
          <span className="summary-value">{formatPrice(totalPrice)}</span>
        </p>
      </div>
      <div className="summary-action">
        <button className="btn-checkout">Check Out</button>
      </div>
    </div>
  );
};

export default CartSummary;
