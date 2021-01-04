import { useState } from 'react';
import { fieldTypes } from '../../../constants/fields';

const FieldMenu = ( { onSelectField } ) => {
	const [ active, setActive ] = useState( 'Basic' );

	return (
		<>
			{
				Object.keys( fieldTypes ).map( ( keyName, keyIndex ) =>
					<div className={ `og-panel og-collapsible${ keyName === active ? ' og-collapsible--expanded' : '' }` } key={ keyIndex }>
						<h4 className="og-collapsible__header" onClick={ () => setActive( keyName ) }>{ keyName }</h4>
						<div className="og-panel__body og-collapsible__body">{ Object.keys( fieldTypes[ keyName ] ).map( ( key, index ) => <button key={ index } type="button" onClick={ () => onSelectField( key ) }>{ fieldTypes[ keyName ][ key ] }</button> ) }</div>
					</div>
				)
			}
		</>
	);
};

export default FieldMenu;