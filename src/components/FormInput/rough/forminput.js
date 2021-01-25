import React from 'react';
import './forminput.style.scss';

const FormInput=({handleChange, label, ...otherProps})=>{

    return <div className="group1">
      <input className='input' 
      onChange={handleChange}
       {...otherProps}/>
      {
          label ?
          <label className='label'>{label}</label>
          : null
      }
    </div>

}
export default FormInput;