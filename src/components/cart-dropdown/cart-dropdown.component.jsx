import React from 'react';
import CustomButton from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItems from '../cart-item/cart-items.component';
import {connect} from 'react-redux';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item=> <CartItems key={item.id} item={item} />)
            }
            
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown);