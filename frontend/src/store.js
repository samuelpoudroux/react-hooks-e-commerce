import React from 'react';
import useBasket from './customHooks/basketHook';
import useProductList from './customHooks/productListHook';
import useGlobalSearch from './customHooks/globalSearchHook';
import { AppContext } from './context/context';

// the global store we give acces to our hooks to all appplication by this global store through appcontext provider
const GlobalStore = ({ children }) => {
  const {
    userBasket,
    addProductTobasket,
    decreaseProductFromBasket,
    removeAllProductsFromBasket,
    removeProductFromBasket,
    setActive
  } = useBasket();
  const {
    products,
    getProducts,
    sortProducts,
    sortProductsByCategories
  } = useProductList();
  const { globalSearch, setGlobalSearchActive, search } = useGlobalSearch();

  const store = {
    basket: {
      list: userBasket,
      add: addProductTobasket,
      decrease: decreaseProductFromBasket,
      removeAllProducts: removeAllProductsFromBasket,
      removeProductFromBasket: removeProductFromBasket,
      setActive: setActive
    },
    products: {
      list: products,
      get: getProducts,
      sort: sortProducts,
      sortByCategories: sortProductsByCategories
    },

    globalSearch: {
      state: globalSearch,
      setGlobalSearchActive: setGlobalSearchActive,
      search: search
    }
  };
  return <AppContext.Provider value={store}> {children} </AppContext.Provider>;
};

export default GlobalStore;
