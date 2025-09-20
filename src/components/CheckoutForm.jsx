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

    const ordersCollection = collection(db, "orders"); // <-- usamos db importado

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
      <div style={{ padding: "2rem" }}>
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
