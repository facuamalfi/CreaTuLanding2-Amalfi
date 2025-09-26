import Item from "./Item";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="no-products">No hay productos disponibles en este momento.</p>;
  }

  return (
    <div className="item-list">
      {items.map((prod) => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
          img={prod.img || "https://via.placeholder.com/150"}
          stock={prod.stock || 10} // stock por defecto
        />
      ))}
    </div>
  );
};

export default ItemList;
