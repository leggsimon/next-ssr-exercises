'use client';
import React from 'react';
import reducer from './reducer';

export const CartContext = React.createContext();

export default function CartProvider({
  children,
}) {
  const [items, dispatch] = React.useReducer(
    reducer,
    null,
  );

  React.useEffect(() => {
    const savedCart =
      window.localStorage.getItem('saved-cart');

    dispatch({
      type: 'initialise',
      cart:
        savedCart === null
          ? []
          : JSON.parse(savedCart),
    });
  }, []);

  React.useEffect(() => {
    if (items) {
      window.localStorage.setItem(
        'saved-cart',
        JSON.stringify(items),
      );
    }
  }, [items]);

  const addItem = React.useCallback((item) => {
    dispatch({
      type: 'add-item',
      item,
    });
  });

  const deleteItem = React.useCallback((item) => {
    dispatch({
      type: 'delete-item',
      item,
    });
  });

  const value = React.useMemo(
    () => ({ items, addItem, deleteItem }),
    [items, addItem, deleteItem],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
