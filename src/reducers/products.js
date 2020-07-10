const initialState = {
    loading: false,
    products: [],
    error: null
}

const prices = ['15.000', '10.000', '30.000'];

const productsStore = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_LIST_START':
            return {
                ...state,
                loading: true
            }
        case 'GET_PRODUCT_LIST_SUCCESS':
            return {
                ...state,
                products: action.payload.amiibo.slice(0, 30).map(product => ({
                    ...product,
                    price: prices[Math.floor(Math.random() * prices.length)]
                })),
                loading: false
            }
        case 'GET_PRODUCT_LIST_FAIL':
            return {
                ...state,
                error: action.payload.error,
                loading: false
            }
        default:
            return state
    }
}

export default productsStore