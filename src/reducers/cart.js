const initialState = {
    items: []
}

const cartStore = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            if (state.items.some(item => item.product.id === action.product.id)) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.product.id ? {
                            ...item,
                            quantity: item.quantity + 1
                        } : item)
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, {
                        product: action.product,
                        quantity: 1
                    }]
                }
            }
        case 'DECREMENT_PRODUCT':
            if (state.items.find(item => (item.product.id == action.product.id && item.quantity > 1))) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.product.id ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity
                        } : item)
                }
            } else {
                return {
                    ...state,
                    items: state.items.filter(item => item.product.id !== action.product.id)
                }
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.product.id)
            }
        default:
            return state
    }
}

export default cartStore