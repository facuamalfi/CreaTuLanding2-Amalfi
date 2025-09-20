import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetchData.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{greeting}</h2>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <p>Cargando productos...</p>
      )}
    </main>
  );
};

export default ItemListContainer;
