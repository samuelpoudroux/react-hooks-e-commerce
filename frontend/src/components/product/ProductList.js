import React, { useContext, useState } from 'react';
import { Row, Col, Popover } from 'antd';
import { AppContext } from '../../context/context';
import { PlusCircleOutlined } from '@ant-design/icons';

import Productcard from './ProductCard';
import SortProducts from './SortProducts';
import useIsAdmin from '../../customHooks/isAdminHooks';
import LoadNewProduct from './LoadNewProduct';
import useProductList from '../../customHooks/productListHook';

const Productlist = () => {
  const { products } = useContext(AppContext);
  const [addProduct, setAddProduct] = useState(false);

  const { isAdmin } = useIsAdmin();
  let productList = products.list;
  // cateorgies select management
  function categoriesHandleChange(values) {
    products.sortByCategories(values, productList);
  }

  return (
    productList &&
    productList.length > 0 && (
      <div>
        {addProduct && <LoadNewProduct setAddProduct={setAddProduct} />}
        <Row
          style={{
            border: '1px solid #89ba17',
            marginTop: ' 10px',
            padding: '1%'
          }}
        >
          <Col lg={22}>
            <SortProducts
              categoriesHandleChange={categoriesHandleChange}
              products={products}
            />
          </Col>

          {isAdmin && (
            <Col lg={2}>
              <Popover title="Ajouter un produit">
                <PlusCircleOutlined
                  onClick={() => setAddProduct(true)}
                  style={{ fontSize: '1.5em' }}
                />
              </Popover>
            </Col>
          )}
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
