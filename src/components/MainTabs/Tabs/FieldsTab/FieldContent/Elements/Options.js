import React, { useState } from 'react';

const Options = () => {
    const [options, setOptions] = useState([]);

    return (
        <div class="builder-options">
            <h3>Options</h3>

            <table >
                {/* {
                    options.length > 0 && <thead>
                        <tr>
                            <td>Value</td>
                            <td>
                                <span>Label</span>
                            </td>
                            <td>Selected</td>
                            <td></td>
                        </tr>
                    </thead>
                } */}
                <tbody>
                    {
                        options.map((item, index) => (
                            <tr>
                                <td width="45%">
                                    <input className="input_value" placeholder="Enter value" />
                                </td>
                                <td width="45%">
                                    <input className="input_label" placeholder="Enter label" />
                                </td>
                                <td width="10%">
                                    <button type="button" class="og-button--small">
                                        <img src="./trash.png" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button type="button" class="og-button--small" onClick={() => setOptions(options.concat(options.length))} >+ Option</button>
        </div>
    );
}

export default Options;