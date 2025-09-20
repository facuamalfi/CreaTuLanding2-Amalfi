import Item from "./Item";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No hay productos disponibles en este momento.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      {items.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
