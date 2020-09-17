import React, { useState } from 'react';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import logo from '../assets/logoWhite.svg';
import ProductsNumber from '../components/ProductsNumber';
import TotalPrice from '../components/TotalPrice';
import NavBar from './Menu';
import './styles/header.css';
import CleanBasket from './CleanBasket';
import Globalsearchinput from './GlobalSearchInput';
import useResponsive from '../customHooks/responsiveHook';

const Header = ({ setBasketActive, basketIsActive }) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <header style={{ zIndex: 0, padding: '1.5%', background: '#878888' }}>
      {menuIsOpened && <NavBar setMenuIsOpened={setMenuIsOpened} />}
      <Row>
        <Col lg={2} md={1} xs={1} sm={1}>
          <MenuOutlined
            onClick={() => setMenuIsOpened(!menuIsOpened)}
            style={{ float: 'left', fontSize: '28px', color: 'white' }}
          />
        </Col>
        <Col lg={16} md={23} xs={23} sm={23}>
          <img
            src={logo}
            alt="logo de l'entreprise"
            style={{ width: '70%', height: '70%' }}
          />
        </Col>
        <Col
          lg={6}
          md={24}
          xs={24}
          style={{
            marginTop: isMobile && '8%'
          }}
        >
          <Row justify="center">
            <Col lg={6} md={2} xs={6} sm={3}>
              <ShoppingCartOutlined
                style={{ fontSize: '20px' }}
                onClick={() => setBasketActive(!basketIsActive)}
              />
            </Col>
            <Col lg={6} md={4} xs={6} sm={6}>
              <ProductsNumber />
            </Col>
            <Col lg={6} md={4} xs={6} sm={6}>
              <TotalPrice />
            </Col>
            <Col lg={6} md={4} xs={6} sm={6}>
              <CleanBasket />
            </Col>
          </Row>
        </Col>
      </Row>
      <Globalsearchinput />
    </header>
  );
};

export default Header;
