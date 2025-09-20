import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Mi Tienda</h1>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/category/zapatillas">Zapatillas</Link>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/accesorios">Accesorios</Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
