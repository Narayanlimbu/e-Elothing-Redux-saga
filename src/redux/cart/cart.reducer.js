import {actions} from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utils';


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
        case actions.CLEAR_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.id!=action.payload.id)
            }
        case actions.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}


export default cartReducer;