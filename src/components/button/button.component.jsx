import React from 'react';
import './button.styles.scss';

const CustomButton=({children,googleSignIn, ...otherprops})=>(
    <button  className= {`${googleSignIn ? "google-sign-in" : " "} custom-button`}
      {...otherprops} >
        {children}
    </button>
)
export default CustomButton;