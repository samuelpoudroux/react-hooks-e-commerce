import React, { useContext } from 'react';
import { AppContext } from '../context/context';

import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const { basket } = useContext(AppContext);
  const listProduct = basket.list;

  const num =
    Array.isArray(listProduct) &&
    listProduct.length > 0 &&
    listProduct.find((e) => e.id === product.id) !== undefined &&
    listProduct.find((e) => e.id === product.id).num;
  return (
    <>
      <button onClick={() => basket.add(product)}> + </button>
      <button onClick={() => basket.decrease(product)}> - </button>
      <b>{num && num}</b>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object
};

export default Product;
