import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Tooltip = ( { id, content } ) => (
	<>
		<svg viewBox="0 0 24 24" className="og-tooltip-icon" data-tooltip-id={ `tooltip-${ id }` } data-tooltip-content={ content }><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z" /></svg>
		<ReactTooltip id={ `tooltip-${ id }` } />
	</>
);
export default Tooltip;
