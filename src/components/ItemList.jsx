import Item from "./Item"

function ItemList({ products }) {
  return (
    <div>
      {products.map((prod) => (
        <Item
          key={prod.id}
          name={prod.name}
          price={prod.price}
          img={prod.img}
        />
      ))}
    </div>
  )
}

export default ItemList
