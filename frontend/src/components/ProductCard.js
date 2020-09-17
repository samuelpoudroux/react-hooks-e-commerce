import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import { Popconfirm } from 'antd';
import {
  QuestionCircleOutlined,
  DeleteOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import './styles/productCard.css';
import PropTypes from 'prop-types';

const { Meta } = Card;

const Productcard = ({ product }) => {
  const { basket } = useContext(AppContext);
  const { list, add, decrease, removeProductFromBasket } = basket;
  const { id, productPrice, name, shortDescription } = product;

  const priceStyle = {
    color: '#878888',
    fontSize: '2em',
    margin: '0'
  };
  return (
    <Col
      xs={24}
      sm={24}
      md={5}
      lg={5}
      className="productCard"
      style={{
        marginTop: '2%',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        background: '#fff',
        borderRadius: '2px',
        position: 'relative'
      }}
    >
      <Row justify="space-between" align="middle " style={{ padding: '2px' }}>
        {list &&
          list.length > 0 &&
          list.find((p) => p.id === id) !== undefined &&
          list.find((p) => p.id === id).num > 0 && (
            <Popconfirm
              title="Souhaitez vous retirer tous ces produits présents dans le panier？"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={() => removeProductFromBasket(product)}
            >
              <DeleteOutlined style={{ color: '#89ba17' }} />
            </Popconfirm>
          )}
        <p style={{ ...priceStyle }}>{productPrice}€</p>
      </Row>
      <Row>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          style={{ width: '100%', height: '250px' }}
        />
      </Row>

      <b style={{ color: priceStyle.color }}>{name}</b>
      <div
        style={{ marginTop: '20px', wordWwrap: 'break-word', padding: '2%' }}
      >
        <p style={{ color: priceStyle.color }}>{shortDescription}</p>
      </div>

      <div
        style={{
          color: priceStyle.color,
          marginTop: '20px',
          fontWeight: 'bold'
        }}
      >
        <ShoppingCartOutlined style={{ color: '#89ba17' }} />{' '}
        {list && list.length > 0 && list.find((p) => p.id === id) !== undefined
          ? list.find((p) => p.id === id).num
          : '0'}{' '}
        piéces
      </div>
      <Row style={{ padding: '2%' }} justify="center">
        <Col span={4}>
          <button
            style={{
              background: '#89ba17',
              border: '3px dotted',
              color: 'white'
            }}
            onClick={() => add(product)}
          >
            +
          </button>
        </Col>
        <Col span={4}>
          <button
            style={{
              background: '#878888',
              border: '3px dotted ',
              color: 'white'
            }}
            onClick={() => decrease(product)}
          >
            -
          </button>
        </Col>
      </Row>
    </Col>
  );
};

Productcard.propTypes = {
  product: PropTypes.object
};

export default Productcard;
