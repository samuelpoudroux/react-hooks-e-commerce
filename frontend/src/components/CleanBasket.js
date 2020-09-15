import React, { useContext } from 'react';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { AppContext } from '../context/context';

const CleanBasket = () => {
  const { basket } = useContext(AppContext);
  const { removeAllProducts } = basket;
  return (
    <Popconfirm
      title="Souhaitez vous vider le panier？"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={() => removeAllProducts()}
    >
      <button>delete</button>
    </Popconfirm>
  );
};

export default CleanBasket;
