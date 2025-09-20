import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const Item = ({ id, name, price, img, stock }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart({ id, name, price, img }, quantity);
    setAdded(true);
  };

  return (
    <div className="item-card">
      <img
        src={img || "https://via.placeholder.com/150"}
        alt={name}
      />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>

      {!added ? (
        <div className="item-card-count">
          <ItemCount stock={stock || 10} initial={1} onAdd={handleAdd} />
        </div>
      ) : (
        <Link to="/cart">
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
