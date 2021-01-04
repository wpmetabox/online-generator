import React from 'react';
import DivRow from './DivRow';

const Input = ( { name, defaultValue, type = 'text', ...rest } ) => (
	<DivRow htmlFor={ name } { ...rest }>
		<input type={ type } id={ name } name={ name } defaultValue={ defaultValue } />
	</DivRow>
);

export default Input;