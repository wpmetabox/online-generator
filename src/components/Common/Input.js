import React from 'react';
import './Input.scss';

const Input = React.forwardRef(({data}, ref) => {
  return (
    <div className="og-field">
      <label className="og-label" htmlFor={data.name}>{data.label}</label>
      <div className="og-input">
        <input type="text" id={data.name} placeholder={data.placeholder} name={data.name} ref={ref} defaultValue={data.defaultValue} />
        {data.description && <div class="og-description">{data.description}</div>}
      </div>
    </div>
  )
})

export default Input;