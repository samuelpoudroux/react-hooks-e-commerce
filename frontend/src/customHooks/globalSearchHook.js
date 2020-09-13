import { useCallback, useReducer } from 'react';
import globalSearchReducer from '../reducers/globalSearchReducer';

import { GLOBAL_SEARCH } from '../constants/globalSearch';

// this customhooks manage the logic of my basket and give us acces to the function to add to remove
const useGlobalSearch = (props) => {
  const [globalSearch, dispatch] = useReducer(globalSearchReducer, {
    active: false
  });

  const search = useCallback((value) => {
    return dispatch({
      type: GLOBAL_SEARCH,
      value
    });
  }, []);

  return {
    globalSearch,
    search
  };
};

useGlobalSearch.propTypes = {};

export default useGlobalSearch;
