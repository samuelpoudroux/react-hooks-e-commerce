import React, { useState } from 'react';
import { Menu, Row, Col } from 'antd';
import { withRouter } from 'react-router';
import '../components/styles/menu.css';

import { HomeOutlined, CloseCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const NavBar = ({ setMenuIsOpened, history }) => {
  const [current, setCurrent] = useState('home');
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const goToPage = (e, url) => {
    setCurrent(e.key);
    history.push(url);
    setMenuIsOpened(false);
  };

  return (
    <Row className="popup">
      <Row className="popup_inner" style={{ padding: '0px' }}>
        <Col
          span={19}
          style={{
            height: '100%',
            background: 'red'
          }}
        >
          <Menu
            style={{
              height: '100%',
              padding: '0px',
              border: '0px'
            }}
            onClick={handleClick}
            selectedKeys={[current]}
            mode="vertical"
          >
            <Menu.Item
              icon={<HomeOutlined style={{ color: 'white' }} />}
            ></Menu.Item>
            <Menu.Item
              key="home"
              icon={<HomeOutlined style={{ color: 'white' }} />}
              onClick={(e) => goToPage(e, '/')}
            >
              Accueil
            </Menu.Item>
            <Menu.Item
              key="test"
              icon={<HomeOutlined style={{ color: 'white' }} />}
              onClick={(e) => goToPage(e, '/test')}
            >
              test
            </Menu.Item>
          </Menu>
        </Col>
        <Col
          span={5}
          style={{
            paddingTop: '25px',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            margin: 0
          }}
        >
          <CloseCircleOutlined
            onClick={() => setMenuIsOpened(false)}
            style={{ color: 'white', fontSize: '28px' }}
          />
        </Col>
      </Row>
    </Row>
  );
};

NavBar.propTypes = {
  setMenuIsOpened: PropTypes.func
};

export default withRouter(NavBar);
