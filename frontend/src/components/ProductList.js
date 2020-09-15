import React, { useContext } from 'react';
import productsApi from '../productsApi';
import { AppContext } from '../context/context';
import { Select, Row } from 'antd';
import {
  SORT_PRODUCTS_BY_HIGHER,
  SORT_PRODUCTS_BY_LOWEST
} from '../constants/products';
import Productcard from './ProductCard';

const options = [
  { value: 'A' },
  { value: 'B' },
  { value: 'C' },
  { value: 'D' }
];

const Productlist = () => {
  const { products } = useContext(AppContext);
  let productList = products.list;

  // cateorgies select management
  function categoriesHandleChange(value) {
    products.sortByCategories(value, productsApi);
  }
  return (
    productList &&
    productList.length > 0 && (
      <div>
        <Row style={{ marginTop: '5%', justifyContent: 'space-around' }}>
          <button
            onClick={() => products.sort(SORT_PRODUCTS_BY_HIGHER, products)}
          >
            tri buttonlus grand
          </button>
          <button
            onClick={() => products.sort(SORT_PRODUCTS_BY_LOWEST, products)}
          >
            tri plus petit
          </button>
          <Select
            mode="multiple"
            style={{ width: '70%' }}
            placeholder="Selectionner les catégories de produits"
            defaultValue={[]}
            onChange={categoriesHandleChange}
            options={options}
          />
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            paddingLeft: '4%',
            paddingRight: '4%',
            justifyContent: 'space-between'
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
