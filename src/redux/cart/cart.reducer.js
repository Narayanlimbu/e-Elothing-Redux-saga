import {actions} from './cart.types'

const INITSTATE={
    hidden:true
}

const cartReducer=(state=INITSTATE, action)=>{
    switch(action.type){
        case actions.TOGGLE_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        default:
            return state
    }
}
export default cartReducer;