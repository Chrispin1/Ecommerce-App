import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 };
    //checking whether the item is in the cart
    const cartItem = cart.find((item) => item.id === id);
    //updating the cart
    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  };
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
