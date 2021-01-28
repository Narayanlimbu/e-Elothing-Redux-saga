import React from 'react';
import CustomButton from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItems from '../cart-item/cart-items.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom';
import {toggleHidden} from '../../redux/cart/cart.actions';

const CartDropdown=({cartItems, history, dispatch})=>{
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems
                ?(cartItems.map(item=> <CartItems key={item.id} item={item} />))
                :(<span className="empty-message">Your Cart is Empty</span>)
            }
            
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleHidden())
            }
            }>GO TO CHECKOUT</CustomButton>
    </div>
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));