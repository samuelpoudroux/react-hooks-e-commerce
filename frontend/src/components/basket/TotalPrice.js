import React, { useCallback, useContext } from 'react';
import { Badge } from 'antd';
import { AppContext } from '../../context/context';
import { getTotalPrice } from '../../repository/product';

const TotalPrice = () => {
  const { basket } = useContext(AppContext);
  const totalPrices = useCallback(() => {
    return getTotalPrice(basket);
  }, [basket]);
  const totalPrice = totalPrices();
  return (
    <Badge
      style={{
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 '
      }}
      count={`${totalPrice} €`}
    />
  );
};

export default TotalPrice;
