import React, { useContext, useState } from 'react';
import './ResultCode.scss'
import Highlight from 'react-highlight'
import Clipboard from 'react-clipboard.js';
import { copyIcon } from '../../constants/icons';
import { Context } from '../../context/GeneratorContext';

const ResultCode = () => {
    const state = useContext(Context);
    const { data } = state.state;
    const [copied, setCopied] = useState(false);

    return (
        <div className="og-result" id="results" style={{ display: data ? 'block' : 'none' }} >
            <div className="alert alert-info">
                Copy the code and paste into your theme's <code>functions.php</code> file. If you want to save the meta box for later use or reference again, please
                <a href="/pricing/">
                    <strong>become a premium user</strong>
                </a>.
            </div>
            <div className="result_wrapper">
                <Highlight language='php'>
                    {data}
                </Highlight>
                <Clipboard title="Click to copy the code" data-clipboard-text={data} onSuccess={() => setCopied(true)}>
                    {!copied && copyIcon}
                    {copied ? 'Copied' : 'Copy'}
                </Clipboard>
            </div>
            <input type="hidden" id="result-code-raw" />
        </div>
    );
}

export default ResultCode;