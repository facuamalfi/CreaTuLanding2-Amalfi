import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Página de inicio */}
          <Route path="/" element={<Home />} />

          {/* Listado de productos */}
          <Route
            path="/productos"
            element={
              <ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />
            }
          />

          {/* Productos por categoría */}
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting="Productos por categoría" />
            }
          />

          {/* Detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Contacto */}
          <Route path="/contacto" element={<Contacto />} />

          {/* Carrito */}
          <Route path="/cart" element={<Cart />} />

          {/* Checkout */}
          <Route path="/checkout" element={<CheckoutForm />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                404 - Página no encontrada
              </h2>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
