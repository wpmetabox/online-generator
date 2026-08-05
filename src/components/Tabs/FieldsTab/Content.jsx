import { getProperty } from 'dot-prop';
import { lazy, memo, Suspense } from 'react';

const lazyControls = Object.fromEntries(
	Object.entries( import.meta.glob( [
		'../../Controls/Checkbox.jsx',
		'../../Controls/Input.jsx',
		'../../Controls/KeyValue.jsx',
		'../../Controls/Name.jsx',
		'../../Controls/Select.jsx',
		'../../Controls/Textarea.jsx',
	] ) ).map( ( [ path, load ] ) => [ path, lazy( load ) ] )
);

const Content = ( { id, data, field } ) => {
	const getControl = name => {
		const Control = lazyControls[ `../../Controls/${ data[ name ].control }.jsx` ];

		return <Control
			fieldId={ id }
			name={ `fields[${ id }][${ name }]` }
			defaultValue={ getProperty( field, name, data[ name ].default ) }
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
