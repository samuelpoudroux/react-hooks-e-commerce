import React, { useState } from 'react';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import logo from '../assets/iconLogo.svg';
import ProductsNumber from '../components/ProductsNumber';
import TotalPrice from '../components/TotalPrice';
import NavBar from './Menu';
import './styles/header.css';
import CleanBasket from './CleanBasket';

const Header = ({ search, setBasketActive, basketIsActive }) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [searchValue, setSearchValue] = useState(undefined);

  const globalSearchHandleChange = (searchValue) => {
    setSearchValue(searchValue);
    search(searchValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== undefined && searchValue.length > 0)
      search(searchValue);
  };

  return (
    <header style={{ zIndex: 0, padding: '1.5%' }}>
      {menuIsOpened && <NavBar setMenuIsOpened={setMenuIsOpened} />}
      <Row>
        <Col
          span={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <MenuOutlined
            onClick={() => setMenuIsOpened(!menuIsOpened)}
            style={{ float: 'left', fontSize: '28px' }}
          />
        </Col>
        <Col
          span={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <img src={logo} alt="logo de l'entreprise" style={{ width: '70%' }} />
        </Col>
        <Col
          span={12}
          style={{
            paddingLeft: '5%',
            paddingRight: '5%'
          }}
        >
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="globalSearchInput"
            style={{
              display: 'flex',
              // justifyContent: 'space-between',
              // alignItems: 'center',
              zIndex: 0
            }}
          >
            <input
              type="text"
              placeholder="Rechercher"
              name="search"
              style={{ width: '100%' }}
              onChange={(e) => globalSearchHandleChange(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </Col>
        <Col
          span={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <p>profil</p>
        </Col>
        <Col span={3}>
          <Row
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <ShoppingCartOutlined
              onClick={() => setBasketActive(!basketIsActive)}
            />
            <ProductsNumber />
            <TotalPrice />
            <CleanBasket />
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
