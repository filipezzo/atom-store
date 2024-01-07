import { ReactNode, createContext, useContext, useState } from "react";

export type CartItem = {
  quantity: number;
  desc: string;
  id: number;
  img: string;
  price: number;
  text: string;
};

type CartContextType = {
  cartItem: CartItem[];
  handleAddItem: (item: CartItem) => void;
  handleDeleteItem: (id: number) => void;
  handleAddQuantity: (id: number) => void;
  handleRemoveQuantity: (id: number) => void;
  handleReset: () => void;
};

type CartContext = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextType);

export const CartContextProvider = ({ children }: CartContext) => {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const handleAddItem = (item: CartItem) => {
    const isItemInCart = cartItem.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      setCartItem([...cartItem, item]);
    }
  };

  const handleDeleteItem = (id: number) => {
    const filterItem = cartItem.filter((item) => item.id !== id);
    setCartItem(filterItem);
  };

  const handleAddQuantity = (id: number) => {
    const update = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartItem(update);
  };

  const handleReset = () => {
    setCartItem([]);
  };

  const handleRemoveQuantity = (id: number) => {
    const update = cartItem.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item,
    );
    setCartItem(update);
  };
  return (
    <CartContext.Provider
      value={{
        cartItem,
        handleAddItem,
        handleDeleteItem,
        handleAddQuantity,
        handleRemoveQuantity,
        handleReset,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
