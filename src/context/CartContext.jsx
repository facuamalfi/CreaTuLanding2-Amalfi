import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((prod) => prod.id === item.id);
      if (existingItem) {
        return prevCart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
