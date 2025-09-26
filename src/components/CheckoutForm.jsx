import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: { name, email, phone },
      items: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden: ", error);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-carrito">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
