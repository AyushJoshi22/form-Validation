import React from 'react';
import './formSelect.css';

function FormSelect({ label, name, options, value, onChange, required, title }) {
  return (
    <div className="formSelect">
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="" >{title}</option>
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
