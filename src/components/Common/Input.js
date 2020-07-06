import React from 'react';
import DivRow from './DivRow';

const Input = ({label, name, defaultValue, description, register, type = 'text', tooltip = ''}) => (
  <DivRow label={label} htmlFor={name} description={description} tooltip={tooltip}>
    <input type={type} id={name} name={name} ref={register} defaultValue={defaultValue} />
  </DivRow>
)

export default Input;