import { memo, useState } from 'react';
import { arrowDownIcon, arrowUpIcon, copyIcon, trashIcon } from '../../../constants/icons';
import { ucwords } from '../../../functions';
import FieldSelected from './FieldSelected';

const Node = ( { id, field, index, removeField, duplicateField, moveField } ) => {
	const [ expanded, setExpanded ] = useState( false );
	const toggleSettings = () => setExpanded( !expanded );

	const remove = e => {
		e.stopPropagation();
		removeField( id );
	};

	const duplicate = e => {
		e.stopPropagation();
		duplicateField( id );
	};

	const moveUp = e => {
		e.stopPropagation();
		moveField( index, 'up' );
	};

	const moveDown = e => {
		e.stopPropagation();
		moveField( index, 'down' );
	};

	let label = [ 'hidden', 'divider' ].includes( field.type ) ? ucwords( field.type ) : field.name || '(No label)';

	return (
		<div className={ `og-item og-item--${ field.type } og-collapsible${ expanded ? ' og-collapsible--expanded' : '' }` }>
			<input type="hidden" name={ `fields[${ id }][_id]` } defaultValue={ id } />
			<input type="hidden" name={ `fields[${ id }][type]` } defaultValue={ field.type } />
			<div className="og-item__header og-collapsible__header" onClick={ toggleSettings } title="Click to reveal field settings">
				<div className="og-item__title" id={ `og-item__title__${ id }` }>{ label }</div>
				<div className="og-item__actions">
					<span className="og-item__type">{ field.type }</span>
					<span className="og-item__action og-item__action--remove" title="Remove" onClick={ remove }>{ trashIcon }</span>
					<span className="og-item__action og-item__action--duplicate" title="Duplicate" onClick={ duplicate }>{ copyIcon }</span>
					<span className="og-item__action og-item__action--toggle" title="Toggle Settings">{ expanded ? arrowUpIcon : arrowDownIcon }</span>
				</div>
			</div>
			<FieldSelected id={ id } field={ field } />
			<div className="og-item__sort">
				<button type="button" className="og-item__up" title="Move up" onClick={ moveUp }>{ arrowUpIcon }</button>
				<button type="button" className="og-item__down" title="Move down" onClick={ moveDown }>{ arrowDownIcon }</button>
			</div>
		</div>
	);
};

export default memo( Node );
