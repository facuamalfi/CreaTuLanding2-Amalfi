function Item({ name, price, img }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <img src={img} alt={name} />
    </div>
  );
}

export default Item;
