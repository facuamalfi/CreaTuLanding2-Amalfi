import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  if (!product) {
    return <p className="loading">Cargando producto...</p>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
