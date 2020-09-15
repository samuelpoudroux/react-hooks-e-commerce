import React, { useCallback, useContext } from 'react';
import { AppContext } from '../context/context';
import { getNumberOfProducts } from '../repository/product';

const ProductsNumber = () => {
  const { basket } = useContext(AppContext);
  const numOfProducts = useCallback(() => {
    return getNumberOfProducts(basket);
  }, [basket]);
  const totalOfProducts = numOfProducts();
  return <p>{totalOfProducts}</p>;
};

export default ProductsNumber;
