import {actions} from './cart.types'
import {addItemToCart} from './cart.utils';

const INITSTATE={
    hidden:true,
    cartItems:[]
}

const cartReducer=(state=INITSTATE, action)=>{
    switch(action.type){
        case actions.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case actions.ADD_ITEMS:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}
export default cartReducer;