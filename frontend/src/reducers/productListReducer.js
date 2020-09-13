import {
    SET_PRODUCTS,
    SORT_PRODUCTS_BY_HIGHER,
    SORT_PRODUCTS_BY_LOWEST,
    SORT_PRODUCTS_BY_CATEGORIES
} from '../constants/products';
import {
    sortProductsByHigher,
    sortProductsByLowest,
    sortProductsByCategories
} from '../repository/product'

const productListReducer = (state, {
    products,
    categories,
    type
}) => {
    switch (type) {
        case SET_PRODUCTS:
            return [...products];
        case SORT_PRODUCTS_BY_HIGHER:
            return sortProductsByHigher(state);
        case SORT_PRODUCTS_BY_LOWEST:
            return sortProductsByLowest(state);
        case SORT_PRODUCTS_BY_CATEGORIES:
            return sortProductsByCategories(products, categories, );
        default:
            break;
    }
};
export default productListReducer;