import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { formatPrice } from '@core/helpers/utils';
import { CartItemType } from '@shared/models/types';
import { removeItem, updateQuantity } from '@shared/redux/cartActions';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuantity(value);

    const parsed = parseInt(value);
    if (value === '') return; // cho phép xóa rỗng tạm thời

    if (isNaN(parsed)) return;

    if (parsed < 1) {
      const confirmed = window.confirm('Do you want to delete the item?');
      if (confirmed) {
        dispatch(removeItem(item.product.id));
      } else {
        setQuantity(item.quantity.toString());
      }
    } else {
      dispatch(updateQuantity(item.product.id, parsed));
    }
  };

  const handleRemove = () => {
    const confirmed = window.confirm('Do you want to delete the item?');
    if (confirmed) {
      dispatch(removeItem(item.product.id));
    }
  };

  return (
    <li className="cart-item">
      <div className="cart-product">
        <img
          className="cart-img"
          src={item.product.image}
          alt={item.product.title}
        />
        <div className="cart-info">
          <h3 className="cart-title">{item.product.title}</h3>
          <p className="cart-detail">{item.product.type}</p>
        </div>
      </div>
      <div className="cart-price">{formatPrice(item.product.price)}</div>

      <div className="cart-quantity">
        <input
          className="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="cart-subtotal">
        {formatPrice(item.product.price * (parseInt(quantity) || 1))}
      </div>

      <div className="cart-remove">
        <button className="btn-remove" onClick={handleRemove}>
          🗑
        </button>
      </div>
    </li>
  );
};

export default CartItem;
