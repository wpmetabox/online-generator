import React from 'react';
import DivRow from './DivRow';

const Textarea = ({name, register, ...rest}) => (
  <DivRow {...rest} htmlFor={name}>
    <textarea ref={register} id={name} name={name} rows="2"></textarea>
  </DivRow>
)
export default Textarea;