import {actions} from './cart.types';
export const toggleHidden=()=>({
    type:actions.TOGGLE_HIDDEN
})
export const addItem=(item)=>({
    type:actions.ADD_ITEMS,
    payload:item
})

