export const products = [
  { id: "1", name: "Zapatilla Runner", price: 120, img: "https://via.placeholder.com/150", category: "zapatillas" },
  { id: "2", name: "Remera Básica", price: 40, img: "https://via.placeholder.com/150", category: "remeras" },
  { id: "3", name: "Gorra Trucker", price: 25, img: "https://via.placeholder.com/150", category: "accesorios" },
  { id: "4", name: "Zapatilla Sport", price: 130, img: "https://via.placeholder.com/150", category: "zapatillas" },
  { id: "5", name: "Remera Estampada", price: 50, img: "https://via.placeholder.com/150", category: "remeras" },
  { id: "6", name: "Mochila Urbana", price: 60, img: "https://via.placeholder.com/150", category: "accesorios" }
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(products), 500));

export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.filter((p) => p.category === categoryId)), 500)
  );

export const getProductById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500)
  );
