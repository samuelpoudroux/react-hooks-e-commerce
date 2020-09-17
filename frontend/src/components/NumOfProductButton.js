import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const NumOfProductButton = ({ product }) => {
  const { basket } = useContext(AppContext);
  const listProduct = basket.list;

  const num =
    Array.isArray(listProduct) &&
    listProduct.length > 0 &&
    listProduct.find((e) => e.id === product.id) !== undefined &&
    listProduct.find((e) => e.id === product.id).num;
  return (
    <Row>
      <b>{num && num} Piéces</b>
      <button
        style={{
          background: '#89ba17',
          border: '3px dotted',
          color: 'white',
          marginLeft: '5px'
        }}
        onClick={() => basket.add(product)}
      >
        +
      </button>
      <button
        style={{
          background: '#878888',
          border: '3px dotted ',
          color: 'white'
        }}
        onClick={() => basket.decrease(product)}
      >
        -
      </button>
    </Row>
  );
};

NumOfProductButton.propTypes = {
  product: PropTypes.object
};

export default NumOfProductButton;
