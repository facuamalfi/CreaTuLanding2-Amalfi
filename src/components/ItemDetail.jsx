const ItemDetail = ({ product }) => {
  if (!product) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando producto...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <img
        src={product.img || "https://via.placeholder.com/200"}
        alt={product.name}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default ItemDetail;
