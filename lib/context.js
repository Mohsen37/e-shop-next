import React, { useContext, createContext, useState } from "react";

export const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function IncreaseQty() {
    setQuantity((prev) => prev + 1);
  }
  function DecreaseQty() {
    setQuantity((prev) => {
      if (prev - 1 < 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  }

  function onAdd(product, quantity) {
    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);
    const exist = cartItem.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItem(
        cartItem.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: quantity }]);
    }
  }

  function onRemove(product) {
    setTotalPrice((prev) => prev - product.price);
    setTotalQuantities((prev) => prev - 1);
    const exist = cartItem.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.slug !== product.slug));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  }

  return (
    <ShopContext.Provider
      value={{
        quantity,
        IncreaseQty,
        DecreaseQty,
        showCart,
        setShowCart,
        cartItem,
        setCartItem,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
        setQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
