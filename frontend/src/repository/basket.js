//add product to basket
const addProductToBasket = (currentBasket = [], action) => {
    const produitIsAlreadyAdded = currentBasket.find(
        (product) => product.id === action.product.id
    );

    if (produitIsAlreadyAdded === undefined) {
        return [...currentBasket, {
            ...action.product,
            num: 1
        }]
    } else {
        const productIndex = currentBasket.findIndex(
            (product) => product.id === action.product.id
        );
        currentBasket.splice(productIndex, 1, {
            ...action.product,
            num: (produitIsAlreadyAdded.num += 1)
        });
    }
    return [...currentBasket];
};

// remove prodcut from basket
const removeProductToBasket = (currentBasket, action) => {
    const productIsHad = currentBasket.find(
        (product) => product.id === action.product.id
    );
    if (productIsHad !== undefined) {
        const productIndex = currentBasket.findIndex(
            (product) => product.id === action.product.id
        );
        currentBasket.splice(productIndex, 1, {
            ...productIsHad,
            num: productIsHad.num > 0 ? productIsHad.num - 1 : 0
        });
    }
    return [...currentBasket]
};
export {
    addProductToBasket,
    removeProductToBasket
}