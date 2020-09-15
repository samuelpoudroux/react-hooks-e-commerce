import _ from 'lodash';

// sort product from higher to lowest  price
const sortProductsByHigher = (products) => {
  const copy = _.cloneDeep(products);
  const sortedProducts = copy.sort(
    (productA, productB) => productB.productPrice - productA.productPrice
  );
  return sortedProducts;
};

// sort product from lowest to higher  price
const sortProductsByLowest = (products) => {
  const copy = _.cloneDeep(products);
  const sortedProducts = copy.sort(
    (productA, productB) => productA.productPrice - productB.productPrice
  );
  return sortedProducts;
};

// sort product related to categories selected on select
const sortProductsByCategories = (products, categories) => {
  const copy = _.cloneDeep(products);
  const sortedProducts = [];
  categories.map((category) =>
    sortedProducts.push(
      ...copy.filter((product) => product.category === category)
    )
  );
  return sortedProducts;
};

const getNumberOfProducts = (basket) => {
  const copy = _.cloneDeep(basket.list);
  let num = 0;
  const totalOfProducts =
    copy !== undefined &&
    copy.reduce((accumulateur, valeurCourante) => {
      return accumulateur + valeurCourante.num;
    }, num);
  return totalOfProducts;
};

const getTotalPrice = (basket) => {
  const copy = _.cloneDeep(basket.list);
  let num = 0;
  const totalPrice =
    copy !== undefined &&
    copy.reduce((accumulateur, valeurCourante) => {
      return accumulateur + valeurCourante.num * valeurCourante.productPrice;
    }, num);
  return totalPrice;
};

export {
  sortProductsByHigher,
  sortProductsByLowest,
  sortProductsByCategories,
  getNumberOfProducts,
  getTotalPrice
};
