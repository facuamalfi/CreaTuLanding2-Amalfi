import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  if (!product) return <p className="loading">Cargando producto...</p>;

  const src = product.image || product.img || "https://via.placeholder.com/400x400?text=Sin+imagen";

  const handleAdd = (quantity) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: src,
      },
      quantity
    );
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <img src={src} alt={product.name} className="item-detail-img" />

      {!added ? (
        <div className="item-card-count">
          <ItemCount stock={product.stock || 10} initial={1} onAdd={handleAdd} />
        </div>
      ) : (
        <Link to="/cart" className="btn-link">
          <button className="btn-carrito">Ir al carrito</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
