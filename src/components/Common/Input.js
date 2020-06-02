import React from 'react';
import './Input.scss';

const Input = React.forwardRef(({ data }, ref) => {
  console.log('ggg',data)
  return (
    <div className="input_container">
      <div className="left_col">
        <span>{data.label}</span>
      </div>
      <div className="right_col">
        <input placeholder={data.placeholder} name={data.name} ref={ref} defaultValue={data.defaultValue} />
        <span>{data?.description}</span>
      </div>
    </div>
  )
})

export default Input;