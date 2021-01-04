import React from 'react';
import DivRow from './DivRow';

const Checkbox = ( { name, defaultValue, ...rest } ) => (
	<DivRow htmlFor={ name } { ...rest }>
		<input type="checkbox" id={ name } name={ name } defaultChecked={ defaultValue } value={ true } />
	</DivRow>
);
export default Checkbox;