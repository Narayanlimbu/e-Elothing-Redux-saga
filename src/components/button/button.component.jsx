import React from 'react';
import './button.styles.scss';

const CustomButton=({children,googleSignIn,inverted, ...otherprops})=>(
    <button  className= {`${inverted ? "inverted" : " "} ${
      googleSignIn ? "google-sign-in" : " "}  custom-button`}
      {...otherprops} >
        {children}
    </button>
)
export default CustomButton;