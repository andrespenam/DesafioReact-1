import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === pizza.id);
      if (exists) return prev.map(item => item.id === pizza.id ? {...item, quantity: item.quantity + 1} : item);
      return [...prev, {...pizza, quantity: 1}];
    });
  };

  const increment = (id) => setCart(prev => prev.map(p => p.id === id ? {...p, quantity: p.quantity+1} : p));
  const decrement = (id) => setCart(prev => prev.map(p => p.id === id ? {...p, quantity: Math.max(p.quantity-1,1)} : p));
  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const totalPrice = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
