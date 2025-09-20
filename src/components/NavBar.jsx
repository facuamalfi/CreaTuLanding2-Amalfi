import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h1>Mi Tienda</h1>
      <div>
        <Link to="/" style={{ margin: "0 10px" }}>Inicio</Link>
        <Link to="/category/zapatillas" style={{ margin: "0 10px" }}>Zapatillas</Link>
        <Link to="/category/remeras" style={{ margin: "0 10px" }}>Remeras</Link>
        <Link to="/category/accesorios" style={{ margin: "0 10px" }}>Accesorios</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
