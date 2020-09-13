import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/context';

const Globalsearch = ({ state }) => {
  const { basket } = useContext(AppContext);
  const items = [];

  for (const [key, value] of Object.entries(state)) {
    if (Array.isArray(value) && value.length > 0) {
      items.push(
        <div key={key}>
          <p>{key}</p>
          {value.map((product) => (
            <div key={product.name}>
              <p key={product.name}>{product.name}</p>
              {key === 'products' && (
                <>
                  <button onClick={() => basket.add(product)}> + </button>
                  <button onClick={() => basket.remove(product)}> - </button>
                </>
              )}
            </div>
          ))}
        </div>
      );
    }
  }
  return <>{items}</>;
};

Globalsearch.propTypes = {
  state: PropTypes.func
};

export default Globalsearch;
