import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { AppContext } from './context/context';
import Header from './components/Header';
import GlobalSearchResult from './components//globalSearch/GlobalSearchResult';
import Basket from './components/basket/Basket';
import SubBasket from './components/basket/SubBasket';
import { Col } from 'antd';
import ProtectedRoute from './ProtectedRoutes';
require('dotenv').config();
function App() {
  const { globalSearch } = useContext(AppContext);
  const { state: globalSearchState } = globalSearch;
  const [basketIsActive, setBasketActive] = useState(false);

  return (
    <div className="App">
      <Router history={history}>
        <Header
          setBasketActive={setBasketActive}
          basketIsActive={basketIsActive}
        />
        <SubBasket />
        <Col span={24}>
          {globalSearchState.active && (
            <GlobalSearchResult state={globalSearchState} />
          )}
          {!globalSearchState.active && (
            <Switch>
              {Routes.map((route) =>
                route.protected ? (
                  <ProtectedRoute
                    key={route.path}
                    Component={route.component}
                  />
                ) : (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                )
              )}
            </Switch>
          )}
        </Col>

        {basketIsActive && <Basket setBasketActive={setBasketActive} />}
      </Router>
    </div>
  );
}

export default App;
