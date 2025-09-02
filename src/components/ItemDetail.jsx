function ItemDetail({ product }) {
  if (!product) return <p>Selecciona un producto</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <img src={product.img} alt={product.name} />
    </div>
  );
}

export default ItemDetail;
