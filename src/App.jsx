import { useState } from "react";
import { products } from "./data";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h1>Tienda React</h1>

      <h2>Lista de productos</h2>
      <ItemList products={products} />

      <h2>Detalle de producto</h2>
      <button onClick={() => setSelected(products[0])}>Ver detalle Producto 1</button>
      <ItemDetail product={selected} />
    </div>
  );
}

export default App;
