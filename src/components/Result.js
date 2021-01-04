import React, { useState } from 'react';
import Clipboard from 'react-clipboard.js';
import Highlight from 'react-highlight';

const ResultCode = () => {
	const [ copied, setCopied ] = useState( false );
	const [ loading, setLoading ] = useState( false );
	const copy = () => {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1000 );
	};

	const data = '';

	return (
		<>
			<button type="submit" disabled={ loading }>Generate Code</button>
			{ loading && <span className="og-loading">Generating code. Please wait...</span> }
			{
				data &&
				<div className="og-result">
					<div className="alert alert-info">Copy the code and paste into your theme's <code>functions.php</code> file. Wanna more features or use inside the WordPress admin? <a href="https://metabox.io/pricing/" target="_blank" rel="noopener noreferrer">Become a premium user</a>.</div>
					<div className="og-result__body">
						<Highlight className="php">{ data }</Highlight>
						<Clipboard title="Click to copy the code" data-clipboard-text={ data } onSuccess={ copy }>{ copied ? 'Copied' : 'Copy' }</Clipboard>
					</div>
				</div>
			}
		</>
	);
};
export default ResultCode;