import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const Item = ({ id, name, price, image, img, stock }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const src = image || img || "https://via.placeholder.com/300x300?text=Sin+imagen";

  const handleAdd = (quantity) => {
    addToCart({ id, name, price, image: src }, quantity);
    setAdded(true);
  };

  return (
    <div className="item-card">
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>

      {!added ? (
        <div className="item-card-count">
          <ItemCount stock={stock || 10} initial={1} onAdd={handleAdd} />
        </div>
      ) : (
        <Link to="/cart" className="btn-link">
          <button className="btn-carrito">Ir al carrito</button>
        </Link>
      )}

      <Link to={`/item/${id}`} className="btn-detalle">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
