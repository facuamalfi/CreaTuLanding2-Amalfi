import { products } from "./data";
import ItemList from "./components/ItemList"
import ItemDetail from "./components/ItemDetail";


function App() {
  return (
    <div>
      <h1>Tienda React</h1>
      <h2>Lista de productos</h2>
      <ItemList products={products} />

      <h2>Detalle de un producto</h2>
      <ItemDetail product={products[0]} />
    </div>
  )
}

export default App
