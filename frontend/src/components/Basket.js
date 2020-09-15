import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/context';
import './styles/basket.css';
import Product from './Product';

const Basket = ({ setBasketActive }) => {
  const state = useContext(AppContext);
  return (
    <div className="basket">
      <div className="basket_inner">
        <b onClick={() => setBasketActive(false)}>close</b>
        {state.basket.list &&
          state.basket.list.length > 0 &&
          state.basket.list.map(
            (product) =>
              product.num > 0 && (
                <div key={product.id}>
                  <h1> {product.name} </h1>{' '}
                  <p> {product.productPrice * product.num}€ </p>
                  <Product product={product} />
                </div>
              )
          )}
        {!state.basket.list ||
          (state.basket.list.length === 0 && <p>Panier vide</p>)}
      </div>
    </div>
  );
};

Basket.propTypes = {
  setBasketActive: PropTypes.func
};

export default Basket;
