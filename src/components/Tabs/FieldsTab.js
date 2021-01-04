import dotProp from 'dot-prop';
import { useState } from 'react';
import { ucwords, uniqid } from '../../functions';
import FieldMenu from './FieldsTab/FieldMenu';
import Node from './FieldsTab/Node';
import SearchResultList from './FieldsTab/SearchResultList';

const FieldsTab = () => {
	const [ fields, setFields ] = useState( [] );
	const [ searchParam, setSearchParam ] = useState( '' );

	const addField = type => setFields( prev => {
		const id = `${ type }_${ uniqid() }`;
		const newField = { _id: id, id, type, name: ucwords( type, '_' ) };
		return [ ...prev, newField ];
	} );

	const removeField = id => setFields( prev => prev.filter( field => field._id !== id ) );

	const duplicateField = id => setFields( prev => {
		let newField = getFieldValue( `fields[${ id }]` );
		const newId = `${ dotProp.get( newField, 'type' ) }_${ uniqid() }`;
		newField.id = newId;
		newField._id = newId;
		newField.name += ' (Copy)';

		const index = prev.findIndex( field => field._id === id );
		let newFields = [ ...prev ];
		newFields.splice( index + 1, 0, newField );

		return newFields;
	} );

	const moveField = ( index, direction ) => setFields( prev => {
		let newFields = [ ...prev ];
		const field = newFields[ index ];
		if ( direction === 'up' ) {
			if ( 0 === index ) {
				return newFields;
			}
			newFields[ index ] = newFields[ index - 1 ];
			newFields[ index - 1 ] = field;
		} else {
			if ( index === prev.length - 1 ) {
				return newFields;
			}
			newFields[ index ] = newFields[ index + 1 ];
			newFields[ index + 1 ] = field;
		}

		return newFields;
	} );

	return (
		<div className="og-fields-wrapper">
			<div className="og-sidebar">
				<input
					type="search"
					className="og-search"
					placeholder="Enter field type here"
					onChange={ ( e ) => setSearchParam( e.target.value ) }
				/>
				{
					searchParam
						? <SearchResultList onSelectField={ addField } searchParam={ searchParam } />
						: <FieldMenu onSelectField={ addField } />
				}
			</div>

			<div className="og-main">
				{ fields.length === 0 && <p>No fields. Select fields on the left to add them to this field group.</p> }
				{ fields.map( ( field, index ) => (
					<Node
						key={ field._id }
						id={ field._id }
						index={ index }
						field={ field }
						removeField={ removeField }
						duplicateField={ duplicateField }
						moveField={ moveField }
					/>
				) ) }
			</div>
		</div>
	);
};

const getFieldValue = key => {
	const data = serializeForm( document.querySelector( '#og-form' ) );
	return dotProp.get( data, bracketsToDots( key ) );
};

const serializeForm = form => {
	const formData = new FormData( form );

	let data = {};

	// Convert `<select multiple>` and checkboxes values to array when more than one option is selected.
	for ( let [ key, value ] of formData ) {
		key = bracketsToDots( key );
		if ( key in data ) {
			const oldValue = dotProp.get( data, key );
			value = Array.isArray( oldValue ) ? [ ...oldValue, value ] : [ oldValue, value ];
		}
		dotProp.set( data, key, value );
	}

	return data;
};

const bracketsToDots = key => key.replace( /\[\]/g, '' ).replace( /\[(.+?)\]/g, '.$1' );

export default FieldsTab;
