import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!product)
    return (
      <p className="item-detail-loading">
        Cargando producto...
      </p>
    );

  const handleAdd = (quantity) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img || "https://via.placeholder.com/200",
      },
      quantity
    );
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <img
        src={product.img || "https://via.placeholder.com/200"}
        alt={product.name}
        className="item-detail-img"
      />

      {!added ? (
        <div className="item-card-count">
          <ItemCount stock={product.stock || 10} initial={1} onAdd={handleAdd} />
        </div>
      ) : (
        <Link to="/cart">
          <button className="btn-carrito">Ir al carrito</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;

