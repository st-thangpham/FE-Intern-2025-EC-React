import React, { useRef } from 'react';
import { CartItemType } from '@shared/models/types';
import { formatPrice } from '@core/helpers/utils';
import { useCart } from '@shared/contexts/CartContext';

interface Props {
  item: CartItemType;
  onCartChange?: () => void;
}

const CartItem: React.FC<Props> = ({ item, onCartChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { removeItem, updateQuantity } = useCart();

  const handleQuantityUpdate = () => {
    const value = inputRef.current?.value || '1';
    const newQuantity = parseInt(value);

    if (isNaN(newQuantity)) {
      inputRef.current!.value = '1';
      updateQuantity(item.product.id, 1);
      onCartChange?.();
      return;
    }

    if (newQuantity < 1) {
      const confirmed = window.confirm('Do you want to delete the item?');
      if (confirmed) {
        removeItem(item.product.id);
        onCartChange?.();
      } else {
        inputRef.current!.value = item.quantity.toString();
      }
    } else {
      if (newQuantity !== item.quantity) {
        updateQuantity(item.product.id, newQuantity);
        onCartChange?.();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleQuantityUpdate();
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
          min={0}
          defaultValue={item.quantity}
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <div className="cart-subtotal">
        {formatPrice(
          item.product.price *
            (parseInt(inputRef.current?.value || '') || item.quantity)
        )}
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
