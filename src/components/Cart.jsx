import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/productos" className="btn-detalle">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name} - ${item.price} x {item.quantity}</span>
            <button className="btn-detalle" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <div className="cart-actions">
        <button className="btn-detalle" onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout">
          <button className="btn-carrito">Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
