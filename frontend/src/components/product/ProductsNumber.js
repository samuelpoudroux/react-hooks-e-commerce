import React, { useCallback, useContext } from 'react';
import { AppContext } from '../../context/context';
import { getNumberOfProducts } from '../../repository/product';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Row } from 'antd';

const ProductsNumber = ({ header = false }) => {
  const { basket } = useContext(AppContext);
  const numOfProducts = useCallback(() => {
    return getNumberOfProducts(basket);
  }, [basket]);
  const totalOfProducts = numOfProducts();
  return (
    <Row justify="center" align="middle">
      <Badge
        style={{ backgroundColor: '#89ba17' }}
        count={`${totalOfProducts} piéces`}
      />
      {header && <ShoppingCartOutlined style={{ color: '#686868' }} />}
    </Row>
  );
};

export default ProductsNumber;
