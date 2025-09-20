import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>El carrito está vacío</h2>
        <Link to="/productos">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "1rem" }}>
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart} style={{ marginRight: "1rem" }}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;
