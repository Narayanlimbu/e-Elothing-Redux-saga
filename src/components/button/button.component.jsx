import React from 'react';
import './button.styles.scss';

const CustomButton=({children, ...otherprops})=>(
    <button className='custom-button' {...otherprops} >
        {children}
    </button>
)
export default CustomButton;