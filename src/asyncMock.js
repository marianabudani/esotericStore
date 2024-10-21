const products = [
  {
    id: 1,
    name: 'Disney Villains Deck',
    price: 25,
    category: 'tarot',
    description: 'Disney famous villains tarot deck.',
    stock: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71fV79JJblL.jpg',
  },
  {
    id: 2,
    name: 'The Nightmare Before Christmas',
    price: 30,
    category: 'tarot',
    description: 'Tarot deck The Nightmare Before Christmas and guidebook from Tim Burton',
    stock: 6,
    image: 'https://http2.mlstatic.com/D_NQ_NP_680791-MLC70894588977_082023-O.webp',
  },
  {
    id: 3,
    name: 'Sahumerio',
    price: 8,
    category: 'herbs',
    description: 'Sahumerios por 9 varillas',
    stock: 2,
    image: 'https://acdn.mitiendanube.com/stores/001/149/529/products/sahumerio_lavanda1-7dc703ae99b1249deb15866331624802-480-0.webp',
  },
  {
    id: 4,
    name: 'Hierbas',
    price: 13,
    category: 'herbs',
    description: 'Mezcla de hierbas para sahumar',
    stock: 10,
    image: 'https://acdn.mitiendanube.com/stores/001/149/529/products/hierbas-ancestrales-machi-75346652b44069497917226341522197-640-0.webp',
  },
  {
    id: 5,
    name: 'Sahumo',
    price: 18,
    category: 'herbs',
    description: 'Pack sahumo de limpieza energetica',
    stock: 4,
    image: 'https://acdn.mitiendanube.com/stores/001/149/529/products/sahumo-chico-limpieza-energetica-81ab1364d7f942f33617257449593480-640-0.webp',
  },
  {
    id: 6,
    name: 'Wicca',
    price: 32,
    category: 'books',
    description: 'Guia de creencias, rituales, magia y brujeria wiccana',
    stock: 2,
    image: 'https://acdn.mitiendanube.com/stores/001/149/529/products/wicca-para-principiantes1-868df9c332e96978b616777990055004-1024-1024.webp',
  },
  {
    id: 7,
    name: 'Hechizos de proteccion',
    price: 27,
    category: 'books',
    description: 'Anula las energias negativas, deshazte de las influencias toxicas y abraza tu poder',
    stock: 3,
    image: 'https://acdn.mitiendanube.com/stores/001/149/529/products/hechizos-de-proteccion1-d77dc3f3c1cefc7eb116814368558131-640-0.webp',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

// Obtengo producto por id
export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === Number(id)));
    }, 1000);
  });
};

// Productos por categoría
export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};

// Fetch de todos los productos
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
