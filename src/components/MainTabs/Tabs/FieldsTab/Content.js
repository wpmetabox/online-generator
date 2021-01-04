import dotProp from 'dot-prop';
import React, { lazy, memo, Suspense } from 'react';
import { getElementControlName } from '../../../../utility/functions';

const Content = ( { id, data, field } ) => {
	const getControl = name => {
		let componentName = getElementControlName( name, field.type );
		let Control = lazy( () => import( `../../../Common/Elements/${ componentName }` ) );

		return <Control
			name={ `fields[${ id }][${ name }]` }
			defaultValue={ dotProp.get( field, name, data[ name ] ) }
		/>;
	};

	return (
		<div className="og-item__content">
			{ Object.keys( data ).map( name => <Suspense fallback={ null } key={ id + name }>{ getControl( name ) }</Suspense> ) }
		</div>
	);
};

export default memo( Content );