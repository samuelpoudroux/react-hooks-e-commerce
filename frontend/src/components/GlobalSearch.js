import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Globalsearch = ({ state }) => {
  const items = [];

  for (const [key, values] of Object.entries(state)) {
    if (Array.isArray(values) && values.length > 0) {
      items.push(
        <div key={key}>
          <p>{key}</p>
          {values.map((value) => (
            <div key={value.name}>
              <p key={value.name}>{value.name}</p>
              {key === 'products' && <Product product={value} />}
            </div>
          ))}
        </div>
      );
    }
  }
  return <>{items}</>;
};

Globalsearch.propTypes = {
  state: PropTypes.object
};

export default Globalsearch;
