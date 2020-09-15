import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;

const Productcard = ({ product }) => {
  const { basket } = useContext(AppContext);
  const { list, add, decrease, removeProductFromBasket } = basket;
  const { id, productPrice, name, shortDescription } = product;

  return (
    <Col
      xs={24}
      sm={24}
      md={5}
      lg={5}
      className="gutter-row"
      style={{ marginTop: '5%', padding: '0px', border: '1px solid black' }}
    >
      <Row style={{ justifyContent: 'space-between', padding: '2%' }}>
        {list &&
          list.length > 0 &&
          list.find((p) => p.id === id) !== undefined &&
          list.find((p) => p.id === id).num > 0 && (
            <Popconfirm
              title="Souhaitez vous vider le panier？"
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={() => removeProductFromBasket(product)}
            >
              <button style={{ backgroundColor: 'colorDeleteButton' }}>
                Retirer du panier
              </button>
            </Popconfirm>
          )}

        <p>
          {list &&
          list.length > 0 &&
          list.find((p) => p.id === id) !== undefined
            ? list.find((p) => p.id === id).num
            : '0'}{' '}
          piéces
        </p>
        <p>{productPrice}€</p>
      </Row>
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style={{ width: '100%' }}
      />
      <div
        style={{
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <Meta title={name} description={shortDescription} />
        <Row style={{ padding: '2%' }}>
          <Col span={12}>
            <button onClick={() => add(product)}>+</button>
          </Col>
          <Col span={12}>
            <button onClick={() => decrease(product)}>-</button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

Productcard.propTypes = {
  product: PropTypes.object
};

export default Productcard;
