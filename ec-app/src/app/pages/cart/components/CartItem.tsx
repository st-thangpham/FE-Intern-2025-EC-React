import React, { useState } from 'react';
import { CartItemType, Product } from '../../../shared/models/types';
import { formatPrice } from '../../../core/helpers/utils';
import { useCart  } from '../../../shared/contexts/CartContext';

interface Props {
  item: CartItemType;
  onCartChange?: () => void;
}

const CartItem: React.FC<Props> = ({ item, onCartChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { removeItem, updateQuantity } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity < 1) {
      const confirmed = window.confirm('Do you want to delete the item?');
      if (confirmed) {
        removeItem(item.product.id);
        onCartChange?.();
      } else {
        setQuantity(quantity);
      }
    } else {
      setQuantity(newQuantity);
      updateQuantity(item.product.id, newQuantity);
      onCartChange?.();
    }

  };

  const handleRemove = () => {
    const confirmed = window.confirm('Do you want to delete the item?');
    if (confirmed) {
      removeItem(item.product.id);
      onCartChange?.();
    }
  };

  return (
    <li className="cart-item">
      <div className="cart-product">
        <img className="cart-img" src={item.product.image} alt={item.product.title} />
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
          min={0}
          max={item.product.stock}
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="cart-subtotal">
        {formatPrice(item.product.price * quantity)}
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
