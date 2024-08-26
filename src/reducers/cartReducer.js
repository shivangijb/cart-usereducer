const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCTS': 
            return {...state, products: action.payload};
        case 'ADD_TO_CART': 
             return {...state, cart: [{...action.payload}, ...state.cart]};

        case 'CHANGE_QUANTITY': {
            const test = {...state, cart: state.cart.filter((c) => c.id === action.payload.id ? c.quantity = action.payload.quantity : c.quantity)}
            console.log("test", test)
            return {...state, cart: state.cart.filter((c) => c.id === action.payload.id ? c.quantity = action.payload.quantity : c.quantity)}
        }
        
        default: {

        }

    }
}

export default cartReducer;