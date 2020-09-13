import {
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET
} from '../constants/basket.js';
import {
  addProductToBasket,
  removeProductToBasket
} from '../repository/basket'


const basketreducer = (currentBasket, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return addProductToBasket(currentBasket, action);
    case REMOVE_PRODUCT_FROM_BASKET:
      return removeProductToBasket(currentBasket, action);
    default:
      break;
  }
};
export default basketreducer;