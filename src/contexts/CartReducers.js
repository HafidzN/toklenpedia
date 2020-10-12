export const Action = {
    ADD_TO_CART: 'add_to_cart',
    REMOVE_FROM_CART: 'remove_from_cart',
    EMPTY_CART: 'empty_cart',
}

const initialState = { items: []}

export const cartReducer = (state = initialState, action) => {
// export const cartReducer = (state, action) => {    
    switch (action.type) {
        case Action.ADD_TO_CART:
            return {
                items : action.payload.cartItems
            }
        // case Action.ADD_TO_CART: {
        //     return [...state, action.product]
        // }
        case Action.REMOVE_FROM_CART:
            return {
                items: action.payload.cartItems
            }
        // case Action.REMOVE_CART: {
        //     return state.filter(product => product.id !== action.id)
        // }

        case Action.EMPTY_CART:
            return {
                items: []
            }

        default:
            return state
    }
} 