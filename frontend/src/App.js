import React, { useContext, useState } from 'react';
import './App.css';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { AppContext } from './context/context';
import Header from './components/Header';
import Globalsearch from './components/GlobalSearchResult';
import Basket from './components/Basket';

function App() {
  const { globalSearch } = useContext(AppContext);
  const [basketIsActive, setBasketActive] = useState(false);
  const { search, state } = globalSearch;

  return (
    <div className="App">
      <Router history={history}>
        <Header
          search={search}
          setBasketActive={setBasketActive}
          basketIsActive={basketIsActive}
        />
        {state.active && <Globalsearch state={state} />}
        {!state.active && (
          <Switch>
            {Routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        )}
        {basketIsActive && <Basket setBasketActive={setBasketActive} />}
      </Router>
    </div>
  );
}

export default App;
