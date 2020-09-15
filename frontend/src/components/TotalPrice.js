import React, { useCallback, useContext } from 'react';
import { AppContext } from '../context/context';
import { getTotalPrice } from '../repository/product';

const TotalPrice = () => {
  const { basket } = useContext(AppContext);
  const totalPrices = useCallback(() => {
    return getTotalPrice(basket);
  }, [basket]);
  const totalPrice = totalPrices();
  return <p style={{ marginLeft: '50%' }}>{totalPrice}</p>;
};

export default TotalPrice;
