import React, { useState } from 'react';
import { xIcon } from '../../constants/icons';
import { uniqid } from '../../functions';
import DivRow from './DivRow';

const KeyValue = ( {
	label,
	name,
	link = '',
	tooltip = '',
	keyPlaceholder = 'Enter key',
	valuePlaceholder = 'Enter value',
} ) => {
	const [ items, setItems ] = useState( [] );

	const addItem = () => setItems( prev => [ ...prev, { key: '', value: '', id: uniqid() } ] );
	const removeItem = id => setItems( prev => prev.filter( item => item.id !== id ) );

	if ( link ) {
		label = `<a href="${ link }" target="_blank" rel="noreferrer noopener">${ label }</a>`;
	}
	return (
		<DivRow label={ label } tooltip={ tooltip }>
			{
				items.map( item => (
					<Item
						key={ item.id }
						item={ item }
						removeItem={ removeItem }
						name={ `${ name }[${ item.id }]` }
						keyPlaceholder={ keyPlaceholder }
						valuePlaceholder={ valuePlaceholder }
					/>
				) )
			}
			<button type="button" className="button" onClick={ addItem }>+ Add New</button>
		</DivRow>
	);
};

const Item = ( { name, item, removeItem, keyPlaceholder, valuePlaceholder } ) => (
	<div className="og-attribute">
		<input type="hidden" name={ `${ name }[id]` } defaultValue={ item.id } />
		<input type="text" placeholder={ keyPlaceholder } name={ `${ name }[key]` } defaultValue={ item.key } />
		<input type="text" placeholder={ valuePlaceholder } name={ `${ name }[value]` } defaultValue={ item.value } />
		<button type="button" className="og-remove" title="Remove" onClick={ () => removeItem( item.id ) }>{ xIcon }</button>
	</div>
);

export default KeyValue;