import DivRow from './DivRow';

const Textarea = ( { name, defaultValue, ...rest } ) => (
	<DivRow { ...rest } htmlFor={ name }>
		<textarea defaultValue={ defaultValue } id={ name } name={ name } rows="4"></textarea>
	</DivRow>
);
export default Textarea;