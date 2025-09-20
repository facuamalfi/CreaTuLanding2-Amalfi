import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
        width: "180px",
      }}
    >
      <img
        src={img || "https://via.placeholder.com/150"}
        alt={name}
        style={{ width: "150px" }}
      />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
