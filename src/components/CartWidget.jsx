import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
};

export default CartWidget;
