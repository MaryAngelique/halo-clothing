import { CART_ACTION_TYPES } from "./cart.types";

import { AnyAction } from "redux";
import { setIsCartOpen, setCartItems } from "./cart.action";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (
    state = CART_INITIAL_STATE,
    action = {} as export const cartReducer = (
        state = CART_INITIAL_STATE,
        action = {} as AnyAction
      ) => {
        if (setIsCartOpen.match(action)) {
          return {
            ...state,
            isCartOpen: action.payload,
          };
        }
      
        if (setCartItems.match(action)) {
          return {
            ...state,
            cartItems: action.payload,
          };
        }
      
        return state;
      };
) => {
    if (setIsCartOpen.match(action)) {
        return {
        ...state,
        isCartOpen: action.payload,
        };
    }

    if (setCartItems.match(action)) {
        return {
        ...state,
        cartItems: action.payload,
        };
    }

    return state;
};