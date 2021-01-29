import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
   
    const priceForStripe=price*100;
    const publishableKey='pk_test_51HlW6cHK27AkfG6vbmk9vhp7xDaZTf90OLAVZSXcCfhv2zLGnQL8X27o5tHeJte4ii8rZAr2kYGYznkwWzhYBer500NpPjMfsw';
    
    // submission of payent will be processed by this function
   const onToken=token=>{
        console.log(token);
        alert('payment successful');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='e-clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;