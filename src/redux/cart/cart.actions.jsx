import {actions} from './cart.types';
export const toggleHidden=()=>({
    type:actions.TOGGLE_HIDDEN
})
export const addItem=(item)=>({
    type:actions.ADD_ITEMS,
    payload:item
})
export const clearItem=(item)=>({
    type:actions.CLEAR_ITEM,
    payload:item
})
export const removeItem=item=>({
    type:actions.REMOVE_ITEM,
    payload:item
})

