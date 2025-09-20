import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAdd(quantity);
  };

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
