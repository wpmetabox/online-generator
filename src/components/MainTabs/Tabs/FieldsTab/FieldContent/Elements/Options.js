import React, { useState } from 'react';
import OptionItem from './OptionItem';

const Options = (props) => {
    const [options, setOptions] = useState(props.defaultValue);

    return (
        <div className="builder-options">
            <h3>Options</h3>
            <table >
                <tbody>
                    {
                        options.map((item, index) => (
                            <OptionItem item={item} key={index} register={props.register}  name={`fields_${props.index}`} />
                        ))
                    }
                </tbody>
            </table>
            <button type="button" className="og-button--small" onClick={() => setOptions(options.concat(options.length))} >+ Option</button>
        </div>
    );
}

export default Options;