import React, { useState } from 'react';
import OptionItem from './OptionItem';

const Options = (props) => {
    const [options, setOptions] = useState(props.data.options);
   
    return (
        <div className="builder-options" >
            <h3>Options</h3>
            <table >
                <tbody>
                    {
                        options?.map((item, index) => (
                            <OptionItem data={item} index={index} register={props.register}  name={`fields-${props.index}`} hasSelect={props.hasSelect} noHeading={props.noHeading} type={props.data.type} />
                        ))
                    }
                </tbody>
            </table>
            <button type="button" className="og-button--small" onClick={() => setOptions(options.concat({ key: '', label: '' }))} >+ Option</button>
            <input type='hidden' name={`fields-${props.index}-options`} value={options.length} />
        </div>
    );
}

export default Options;