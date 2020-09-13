import globalSearchApi from '../globalSearchApi';

const globalSearch = (state, searchValue) => {
  let searchResult = {
    ...state
  };
  for (const [key, value] of Object.entries(globalSearchApi)) {
    searchResult[key] = Array.isArray(value)
      ? value.filter((e) =>
          e.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : null;
  }

  if (searchValue.length !== 0) {
    searchResult.active = true;
  } else {
    searchResult.active = false;
  }
  return searchResult;
};

export { globalSearch };
