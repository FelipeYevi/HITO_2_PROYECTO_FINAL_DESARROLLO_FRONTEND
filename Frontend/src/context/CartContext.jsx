import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Hook 
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* agregar producto*/
  const addToCart = (producto) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === producto.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...producto, quantity: 1 }];
    });
  };

  /* quitar1*/
  const removeFromCart = (productoId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productoId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* eliminar producto*/
  const removeCompletely = (productoId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productoId)
    );
  };


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeCompletely,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
