const products = [
  {
    id: 1,
    name: "Adidas Blazer",
    price: 120,
    stock: 10,
    category: "zapatillas",
    img: "https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=400&h=400&fit=crop&auto=format&crop=center"
  },
  {
    id: 2,
    name: "Nike Retro",
    price: 130,
    stock: 8,
    category: "zapatillas",
    img: "https://images.unsplash.com/photo-1581397422720-681cce994fee?q=80&w=400&h=400&fit=crop&auto=format&crop=center"
  },
  {
    id: 3,
    name: "Grace Chapel",
    price: 40,
    stock: 15,
    category: "remeras",
    img: "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=400&h=400&fit=crop&auto=format&crop=center"
  },
  {
    id: 4,
    name: "Apollo 11",
    price: 45,
    stock: 12,
    category: "remeras",
    img: "https://images.unsplash.com/photo-1592799093260-adbec9c7abdf?q=80&w=400&h=400&fit=crop&auto=format&crop=center"
  },
  {
    id: 5,
    name: "Trip Sunglasses",
    price: 25,
    stock: 20,
    category: "accesorios",
    img: "https://images.unsplash.com/photo-1522125123931-9304d91a42ee?q=80&w=400&h=400&fit=crop&auto=format&crop=center"
  },
  {
    id: 6,
    name: "Under Cap",
    price: 20,
    stock: 18,
    category: "accesorios",
    img: "https://images.unsplash.com/photo-1591818343198-4ff334074580?q=80&w=400&h=400&fit=crop&auto=format&crop=center"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter((p) => p.category === categoryId)), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === parseInt(id))), 500);
  });
};
