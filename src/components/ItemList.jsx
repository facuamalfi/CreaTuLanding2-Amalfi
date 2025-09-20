import Item from "./Item";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  if (!items || items.length === 0) {
    return <p>No hay productos disponibles en este momento.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      {items.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
          img={prod.img || "https://via.placeholder.com/150"}
          stock={prod.stock || 10} // <-- asignamos un stock por defecto si no hay
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ItemList;
