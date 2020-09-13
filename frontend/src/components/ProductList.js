import React, { useContext } from 'react';
import productsApi from '../productsApi';
import { AppContext } from '../context/context';
import { Select } from 'antd';
import {
  SORT_PRODUCTS_BY_HIGHER,
  SORT_PRODUCTS_BY_LOWEST
} from '../constants/products';

const options = [
  { value: 'A' },
  { value: 'B' },
  { value: 'C' },
  { value: 'D' }
];

const Productlist = () => {
  const { basket, products } = useContext(AppContext);
  let productList = products.list;

  // cateorgies select management
  function categoriesHandleChange(value) {
    products.sortByCategories(value, productsApi);
  }
  return (
    productList &&
    productList.length > 0 && (
      <div>
        {productList.map((product) => (
          <div key={product.id}>
            {product.name}
            <button onClick={() => basket.add(product)}> + </button>
            <button onClick={() => basket.remove(product)}> - </button>
            {
              <p>
                {basket.list &&
                basket.list.length > 0 &&
                basket.list.find((p) => p.id === product.id) !== undefined
                  ? basket.list.find((p) => p.id === product.id).num
                  : '0'}
              </p>
            }
            <p>{product.productPrice}</p>
          </div>
        ))}
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
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={[]}
          onChange={categoriesHandleChange}
          options={options}
        />
      </div>
    )
  );
};

export default Productlist;
