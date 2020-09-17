import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/context';
import './styles/basket.css';
import NumOfProductButton from './NumOfProductButton';
import {
  CloseCircleOutlined,
  QuestionCircleOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { Card, Col, Row, Popconfirm } from 'antd';
import CleanBasket from './CleanBasket';
import { getTotalPrice } from '../repository/product';

const Basket = ({ setBasketActive }) => {
  const { basket } = useContext(AppContext);

  const totalPrices = useCallback(() => {
    return getTotalPrice(basket);
  }, [basket]);
  const { removeProductFromBasket } = basket;
  const productName = (product) => {
    return (
      <Row justify="space-between">
        <h2 style={{ color: '#89ba17' }}>{product.name}</h2>
        <Popconfirm
          title="Souhaitez vous retirer tous ces produits présents dans le panier？"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          onConfirm={() => removeProductFromBasket(product)}
        >
          <DeleteOutlined style={{ color: '#89ba17' }} />
        </Popconfirm>
      </Row>
    );
  };

  return (
    <div className="basket" style={{ padding: '1%' }}>
      <Col className="basket_inner">
        <Row justify="space-between">
          <CleanBasket color={'white'} fontSize={'30px'} />
          <CloseCircleOutlined
            style={{ color: 'white', fontSize: '30px' }}
            onClick={() => setBasketActive(false)}
          />
        </Row>
        <Row style={{ marginTop: '10%' }}>
          {basket.list &&
            basket.list.length > 0 &&
            basket.list.map(
              (product) =>
                product.num > 0 && (
                  <Col span={24}>
                    <Row justify="center">
                      <Col key={product.id} span={22}>
                        <Card
                          style={{ marginTop: '5px' }}
                          title={productName(product)}
                          bordered={false}
                        >
                          <Row justify="space-between">
                            <Col span={12}>
                              <NumOfProductButton product={product} />
                            </Col>
                            <Col span={12}>
                              <p>
                                Sous-total {product.productPrice * product.num}€{' '}
                              </p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                )
            )}
        </Row>
        <Row align="center" style={{ color: 'white', fontSize: '2em' }}>
          {!basket.list ||
            (basket.list.length === 0 && <p>Votre panier est vide</p>)}
        </Row>
        <Row
          style={{ marginTop: '20%', background: '#878885', padding: '10px' }}
          justify="space-between"
        >
          <Col>
            <b style={{ color: 'white', fontSize: '1.5em' }}>Prix total:</b>{' '}
          </Col>
          <Col>
            <b style={{ color: 'white', fontSize: '1.5em' }}>
              {totalPrices()}€
            </b>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

Basket.propTypes = {
  setBasketActive: PropTypes.func
};

export default Basket;
