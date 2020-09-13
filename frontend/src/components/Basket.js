import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/context';
import './styles/basket.css';

const Basket = ({ setBasketActive }) => {
  const state = useContext(AppContext);
  return (
    <div className="basket">
      <div className="basket_inner">
        <b onClick={() => setBasketActive(false)}>close</b>
        {state.basket.list &&
          state.basket.list.length > 0 &&
          state.basket.list.map(
            ({ id, name, num, productPrice }) =>
              num > 0 && (
                <div key={id}>
                  <h1> {name} </h1> <p> {productPrice * num}€ </p>
                  <p>
                    {num}
                    piéces
                  </p>
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
  setBasketActive: PropTypes.object
};

export default Basket;
