import { useReducer, createContext, useState } from "react";
import { createAction } from "../Utils/Reducer/reducer.utils";

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

const clearCartItems = (cartItems, productToClear) => {
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  removeCartItems: () => null,
  addCartItems: () => null,
  clearCartItems: () => null,
  isCartOpen: false,
  setIsCartOpen: () => null,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItem);
  };
  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };
  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItems(cartItems, productToClear);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    cartItems,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
