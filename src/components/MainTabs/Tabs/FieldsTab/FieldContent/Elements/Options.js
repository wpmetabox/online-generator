import React, { useState } from 'react';
import OptionItem from './OptionItem';

const Options = (props) => {
    const [options, setOptions] = useState(props.data.options);
    const checkHasSelect = () => {
        const listAddSelect = ["checkbox_list", "radio", "select", "select_advanced", "image select",  "autocomplete"];
        return listAddSelect.includes(props.data.type)
    }
    const checkHasHeading = () => {
        const listNoHeading = ["text_list", "fieldset_text"];
        return !listNoHeading.includes(props.data.type)
    }
    return (
        <div className="builder-options">
            <h3>Options</h3>
            <table >
                <tbody>
                    {
                        options?.map((item, index) => (
                           

                            <OptionItem item={item} index={index} register={props.register}  name={`fields_${props.index}`} hasSelected={checkHasSelect()} noHeading={checkHasHeading()} type={props.data.type} />
                        ))
                    }
                </tbody>
            </table>
            <button type="button" className="og-button--small" onClick={() => setOptions(options.concat({ key: '', label: '' }))} >+ Option</button>
            <input type='hidden' name={`fields_${props.index}_options`} value={options.length} />
        </div>
    );
}

export default Options;