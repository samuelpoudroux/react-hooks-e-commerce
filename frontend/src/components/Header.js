import React, { useState } from 'react';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import logo from '../assets/iconLogo.svg';
import NavBar from './Menu';
import './styles/header.css';

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
    <header style={{ zIndex: 0, padding: '1%' }}>
      {menuIsOpened && <NavBar setMenuIsOpened={setMenuIsOpened} />}
      <Row>
        <Col span={2}>
          <MenuOutlined
            onClick={() => setMenuIsOpened(!menuIsOpened)}
            style={{ float: 'left', fontSize: '28px' }}
          />
        </Col>
        <Col span={3}>
          <img src={logo} alt="logo de l'entreprise" />
        </Col>
        <Col
          span={12}
          style={{
            zIndex: 0,
            paddingLeft: '5%',
            paddingRight: '5%'
          }}
        >
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="globalSearchInput"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
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
        <Col span={3}>
          <p>profil</p>
        </Col>
        <Col span={3}>
          <ShoppingCartOutlined
            onClick={() => setBasketActive(!basketIsActive)}
          />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
