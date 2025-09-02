function Item({ name, price, img }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <img src={img} alt={name} width="150" />
    </div>
  )
}

export default Item
