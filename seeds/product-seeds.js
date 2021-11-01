const { Product } = require('../models');

const productData = [
  {
    product_name: 'T-Shirt',
    price: 12.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Cargo Shorts',
    price: 24.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: 'Top 50 Music Compilation Vinyl Record',
    price: 49.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Baseball Hat',
    price: 19.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Running Shoes',
    price: 75.0,
    stock: 25,
    category_id: 5,
  },
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;