import React from 'react';
import DivRow from '../DivRow';

const Taxonomy = ( { name, ...rest } ) => (
	<DivRow { ...rest } htmlFor={ name } label="Taxonomy">
		<select id={ name } name={ name } defaultValue="category">
			<option value="category">Category</option>
			<option value="post_tag">Tag</option>
		</select>
	</DivRow>
);
export default Taxonomy;