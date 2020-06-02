import React, { useContext, useRef } from 'react';
import './ResultCode.scss'
import { Context } from '../../context/GeneratorContext';


const scrollToRef = (ref) => window.scrollTo(0, ref?.current?.offsetTop)

const ResultCode = () => {
    const state = useContext(Context);
    const { data } = state.state

    const myRef = useRef(null)
    scrollToRef(myRef)
    console.log('zzz', state)
    return (
        <div class="og-result" id="results" style={{ display: 'block' }} >
            <div class="alert alert-info">
                Copy the code and paste into your theme's <code>functions.php</code> file. If you want to save the meta box for later use or reference again, please <a href="/pricing/"><strong>become a premium user</strong></a>.
        </div>

            <div className="result_wrapper">
                <pre><code class="php" id="result-code">{data}</code></pre>
                <button id="result-copy" class="og-result__button-copy" title="Click to copy the code" dataClipboardAction="copy" dataClipboardTarget="#result-code-raw" dataAltText="Copied!">
                    Copy
            </button>
            </div>
            <input type="hidden" id="result-code-raw" />
        </div>
    );
}

export default ResultCode;