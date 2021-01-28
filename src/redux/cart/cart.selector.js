import {createSelector} from 'reselect';

const selectCart=state=>state.cart;


export const selectCartItems=createSelector(
    [selectCart],
    cart=> cart.cartItems
);

export const selectQuantity=createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce((accumulator, item)=>accumulator+item.quantity,0)
)

export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)
export const selectTotalPrice=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((total,item)=> total+(item.price*item.quantity),0)
)