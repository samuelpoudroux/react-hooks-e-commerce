import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import Addandremoveproduct from '../../components/product/AddAndRemoveProduct';
import ProductNumber from '../../components/product/ProductNumber';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});
  const { id } = match.params;
  const { REACT_APP_API_DOMAIN, REACT_APP_API_PRODUCT } = process.env;

  const getProduct = async () => {
    const { data } = await axios.get(
      REACT_APP_API_DOMAIN + REACT_APP_API_PRODUCT + `${id}`
    );
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Row align="middle" justify="center">
      <Col lg={6} sm={24} xs={24}>
        image
      </Col>
      <Col lg={10} sm={24} xs={24}>
        <h1>{product.name}</h1>
        <p>{product.longDescription}</p>
        <Row justify="center">
          <b>{`Prix: ${product.productPrice}€`}</b>
        </Row>
      </Col>
      <Col lg={7} sm={24} xs={24}>
        <Row justify="center" align="middle">
          <ProductNumber product={product} />
          <Col>
            <ShoppingCartOutlined
              style={{ color: '#89ba17', marginLeft: '5px' }}
            />
          </Col>
          <Addandremoveproduct product={product} />
        </Row>
      </Col>
    </Row>
  );
};

export default ProductDetail;
