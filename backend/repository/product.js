const Product = require('../models/product'); // on importe notre model
const { v4: uuidv4 } = require('uuid');

// getManagement
const getAllProducts = async () => {
  const products = Product.find((err, data) => {
    if (err) throw err;
    return data;
  });

  return products;
};

const getProductById = async (id) => {
  const product = Product.findOne({ id: id }, (err, data) => {
    if (err) throw err;
    console.log('tata', data);
    return data;
  });
  return product;
};

//createProduct management
const createProduct = async (product, filename) => {
  try {
    const { name, productPrice, category, inStock } = product;
    const id = uuidv4();
    if (!name || !productPrice || !category || !inStock) {
      return { error: 'vérifier les champs obligatoires' };
    } else {
      const newProduct = new Product({
        id,
        filename,
        ...product
      });
      console.log('toto', newProduct);
      Product.collection.insertOne(newProduct);
      return { message: 'enregistré avec succés' };
    }
  } catch (error) {
    throw error;
  }
};

//updateProductManagement
const updateProduct = async (product, id) => {
  try {
    const { name, productPrice, category } = product;
    if (!name || !productPrice || !category) {
      throw 'vérifier les champs obligatoires';
    } else {
      Product.updateProductOne({ id: id }, { $set: product }, function (
        err,
        res
      ) {
        if (err) throw err;
        console.log('1 document updateProductd');
      });
    }
  } catch (error) {
    throw error;
  }
};

//delete management
const deleteProduct = async (id) => {
  Product.deleteOne({ id: id }, function (err, res) {
    if (err) throw err;
    console.log('1 document updateProductd');
  });
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById
};
