import React from 'react';
import DivRow from './DivRow';

const Input = ({label, name, defaultValue, description, register}) => (
  <DivRow label={label} htmlFor={name} description={description}>
    <input type="text" id={name} name={name} ref={register} defaultValue={defaultValue} />
  </DivRow>
)

export default Input;