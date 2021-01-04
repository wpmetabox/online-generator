import dotProp from 'dot-prop';
import { lazy, memo, Suspense } from 'react';

const Content = ( { id, data, field } ) => {
	const getControl = name => {
		let Control = lazy( () => import( `../../Controls/${ data[ name ].control }` ) );

		return <Control
			fieldId={ id }
			name={ `fields[${ id }][${ name }]` }
			defaultValue={ dotProp.get( field, name, data[ name ].default ) }
			{ ...data[ name ].props }
		/>;
	};

	return (
		<div className="og-item__content">
			{ Object.keys( data ).map( name => <Suspense fallback={ null } key={ id + name }>{ getControl( name ) }</Suspense> ) }
		</div>
	);
};

export default memo( Content );