// src/redux/cart/cartReducer.ts
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  CLEAR_CART,
} from './cartActionTypes';
import { Product } from '@shared/models/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Load from localStorage
const loadCartFromStorage = (): CartItem[] => {
  try {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return [];
  }
};

// Sava to localStorage
const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

const initialState: CartState = {
  items: loadCartFromStorage(),
};

const cartReducer = (state = initialState, action: any): CartState => {
  let updatedItems: CartItem[];

  switch (action.type) {
    case ADD_ITEM: {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, { product, quantity }];
      }

      saveCartToStorage(updatedItems);
      return { ...state, items: updatedItems };
    }

    case REMOVE_ITEM: {
      updatedItems = state.items.filter(
        (item) => item.product.id !== action.payload.id
      );
      saveCartToStorage(updatedItems);
      return { ...state, items: updatedItems };
    }

    case UPDATE_QUANTITY: {
      updatedItems = state.items.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      saveCartToStorage(updatedItems);
      return { ...state, items: updatedItems };
    }

    case CLEAR_CART:
      saveCartToStorage([]);
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default cartReducer;
