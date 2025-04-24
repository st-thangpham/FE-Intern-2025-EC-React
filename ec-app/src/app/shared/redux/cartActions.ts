// src/redux/cart/cartActions.ts
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  CLEAR_CART,
} from './cartActionTypes';

import { Product } from '@shared/models/types';

export const addItem = (product: Product, quantity: number) => ({
  type: ADD_ITEM,
  payload: { product, quantity },
});

export const removeItem = (id: string) => ({
  type: REMOVE_ITEM,
  payload: { id },
});

export const updateQuantity = (id: string, quantity: number) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
