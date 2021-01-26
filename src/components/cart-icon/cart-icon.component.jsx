import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleHidden} from '../../redux/cart/cart.actions';
import {selectQuantity} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
const CartIcon=({toggleHidden, quantity})=>(
    <div className='cart-icon' onClick={toggleHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{quantity}</span>
    </div>
)

const mapStateToProps=createStructuredSelector({
    quantity:selectQuantity
})

const mapDispatchToProps=dispatch=>({
    toggleHidden:()=>dispatch(toggleHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);