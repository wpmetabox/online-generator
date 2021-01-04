import DivRow from './DivRow';

const FieldType = ( { name, options, placeholder = '', defaultValue, ...rest } ) => (
	<DivRow { ...rest } htmlFor={ name }>
		<select placeholder={ placeholder } id={ name } name={ name } defaultValue={ defaultValue }>
			{
				Object.entries( options ).map( ( [ value, label ] ) => <option key={ value } value={ value }>{ label }</option> )
			}
		</select>
	</DivRow>
);
export default FieldType;