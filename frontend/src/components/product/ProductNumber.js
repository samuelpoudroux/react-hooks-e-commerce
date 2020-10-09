import React, { useContext } from 'react';
import { AppContext } from '../../context/context';

import { Row } from 'antd';

const ProductNumber = ({ product }) => {
  const { basket } = useContext(AppContext);
  const { list } = basket;

  return (
    <Row justify="center">
      {list &&
      list.length > 0 &&
      list.find((p) => p.id === product.id) !== undefined
        ? list.find((p) => p.id === product.id).num
        : '0'}{' '}
      piéces
    </Row>
  );
};

export default ProductNumber;
