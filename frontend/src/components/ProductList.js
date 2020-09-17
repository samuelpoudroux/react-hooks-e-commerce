import React, { useContext } from 'react';
import productsApi from '../productsApi';
import { Row } from 'antd';
import { AppContext } from '../context/context';

import Productcard from './ProductCard';
import SortProducts from './SortProducts';

const Productlist = () => {
  const { products } = useContext(AppContext);
  let productList = products.list;
  // cateorgies select management
  function categoriesHandleChange(values) {
    products.sortByCategories(values, productsApi);
  }
  return (
    productList &&
    productList.length > 0 && (
      <div>
        <Row>
          <SortProducts
            categoriesHandleChange={categoriesHandleChange}
            products={products}
          />
        </Row>
        <Row
          style={{
            paddingLeft: '4%',
            paddingRight: '4%',
            justifyContent: 'space-evenly'
          }}
        >
          {productList.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </Row>
      </div>
    )
  );
};

export default Productlist;
