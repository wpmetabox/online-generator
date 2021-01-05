import { lazy, Suspense, useState } from 'react';
import { facebookIcon, twitterIcon } from '../constants/icons';

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
						<div className="alert alert-info">Copy and paste the code into your theme's <code>functions.php</code> file. Wanna use this builder inside the WordPress admin with support for groups, tabs, advanced location rules and many more settings? <a href="https://metabox.io/pricing/">Become a premium user</a>!</div>
						<div className="og-share">
							<strong>If you find this tool useful, please share it with your friends:</strong>
							<a className="og-share--facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmetabox.io%2Fonline-generator%2F" target="_blank" rel="noopener noreferrer">{ facebookIcon } Facebook</a>
							<a className="og-share--twitter" href="https://twitter.com/intent/tweet?url=https://metabox.io/online-generator/&amp;via=wpmetabox&amp;text=I+just+generated+a+custom+meta+box+and+custom+fields+for+%23WordPress" target="_blank" rel="noopener noreferrer">{ twitterIcon } Twitter</a>
						</div>
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