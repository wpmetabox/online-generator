import slugify from 'slugify';
import DivRow from './DivRow';

const Name = ( { name, defaultValue, ...rest } ) => {
	const onChange = e => {
		// Update field header bar.
		const titleElement = document.getElementById( `og-item__title__${ rest.fieldId }` );
		if ( titleElement ) {
			titleElement.textContent = e.target.value || '(No label)';
		}

		// Auto generate ID.
		const idElement = document.getElementById( `fields[${ rest.fieldId }][id]` );
		if ( idElement ) {
			idElement.value = slugify( e.target.value, { lower: true, replacement: '_' } );
		}
	};

	return (
		<DivRow htmlFor={ name } { ...rest }>
			<input type="text" id={ name } name={ name } defaultValue={ defaultValue } onChange={ onChange } />
		</DivRow>
	);
};
export default Name;