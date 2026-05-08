import { createContext, useMemo, useState } from "react";
import { SHOP_ITEMS } from "../data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((child) => child.id === item.id);
      if (exists) {
        return prev.map((child) =>
          child.id === item.id ? { ...child, qty: child.qty + 1 } : child
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const changeQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const value = useMemo(
    () => ({ cartItems, addToCart, removeItem, changeQty, clearCart, shopItems: SHOP_ITEMS }),
    [cartItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
