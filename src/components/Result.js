import { lazy, Suspense, useState } from 'react';

const ResultCode = () => {
	const [ isGenerating, setIsGenerating ] = useState( false );
	const [ data, setData ] = useState( '' );
	const [ copied, setCopied ] = useState( false );

	const onClick = () => {
		setData( '' );
		setIsGenerating( true );

		const isTest = window.location.href.includes( 'localhost' );
		let url = isTest ? 'http://localhost/metaboxio/wp-json/mbb-parser/meta-box' : 'https://metabox.io/wp-json/mbb-parser/meta-box';

		const formData = new FormData( document.querySelector( '#og-form' ) );
		fetch( url, {
			method: 'POST',
			body: formData
		} ).then( response => response.json() ).then( response => {
			setData( response );
			setIsGenerating( false );
		} );
	};

	const copy = () => {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1000 );
	};

	const Clipboard = lazy( () => import( 'react-clipboard.js' ) );
	const Highlight = lazy( () => import( 'react-highlight' ) );

	return (
		<>
			<button type="button" disabled={ isGenerating } onClick={ onClick }>Generate Code</button>
			{ isGenerating && <span className="og-loading">Generating code. Please wait...</span> }
			{
				data.length > 0 &&
				<Suspense fallback={ null }>
					<div className="og-result">
						<div className="alert alert-info">Copy the code and paste into your theme's <code>functions.php</code> file. Wanna more features or use inside the WordPress admin? <a href="https://metabox.io/pricing/" target="_blank" rel="noopener noreferrer">Become a premium user</a>.</div>
						<div className="og-result__body">
							<Highlight className="php">{ data }</Highlight>
							<Clipboard title="Click to copy the code" data-clipboard-text={ data } onSuccess={ copy }>{ copied ? 'Copied' : 'Copy' }</Clipboard>
						</div>
					</div>
				</Suspense>
			}
		</>
	);
};
export default ResultCode;