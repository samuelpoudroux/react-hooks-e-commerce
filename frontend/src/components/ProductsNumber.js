import React, { useCallback, useContext } from 'react';
import { AppContext } from '../context/context';
import { getNumberOfProducts } from '../repository/product';
import { Badge, Row } from 'antd';

const ProductsNumber = () => {
  const { basket } = useContext(AppContext);
  const numOfProducts = useCallback(() => {
    return getNumberOfProducts(basket);
  }, [basket]);
  const totalOfProducts = numOfProducts();
  return (
    <Badge
      style={{ backgroundColor: '#89ba17' }}
      count={`${totalOfProducts} piéces`}
    />
  );
};

export default ProductsNumber;
