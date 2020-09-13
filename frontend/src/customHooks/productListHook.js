import { useReducer, useEffect, useCallback } from 'react';
import productListReducer from '../reducers/productListReducer';
import productsApi from '../productsApi';
import {
  SET_PRODUCTS,
  SORT_PRODUCTS_BY_CATEGORIES
} from '../constants/products';

// this customhooks manage the logic of my productList and give us acces to the function to add to remove
const useProductList = () => {
  const [products, dispatch] = useReducer(productListReducer, []);
  const productsIsempty = products.length === 0;
  const getProducts = useCallback((products) => {
    return dispatch({
      type: SET_PRODUCTS,
      products
    });
  }, []);

  //this function is related to the type of action dispacth either sort by higher or lowest
  const sortProducts = useCallback((type) => {
    return dispatch({
      type: type
    });
  }, []);

  const sortProductsByCategories = useCallback((categories, products) => {
    return dispatch({
      type: SORT_PRODUCTS_BY_CATEGORIES,
      categories,
      products
    });
  }, []);

  //when the products list is empty i set a orignal product, its because when the select is empy i need to set the initail state
  useEffect(() => {
    getProducts(productsApi);
  }, [productsIsempty]);

  return {
    products,
    getProducts,
    sortProducts,
    sortProductsByCategories
  };
};

export default useProductList;
