import { useState } from 'react';
import './formInput.css'

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e)=>{
        setFocused(true);
    }

  return (
    <div className="formInput">
        <label>{label}</label>
        <input 
            {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            focused={focused.toString()}
            // onFocus={()=>
            //     inputProps.name==='confirmPassword'&& setFocused(true)
            // }
            autoComplete="off"
        />
        <span>{errorMessage}</span>


        {/* <input placeholder={props.placeholder} 
            onChange={(e) => {
                // console.log(e)
                props.setUsername(e.target.value)
            }}
        /> */}
    </div>
  )
}

export default FormInput