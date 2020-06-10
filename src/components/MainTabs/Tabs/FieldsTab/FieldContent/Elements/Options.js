import React, { useState, useEffect } from 'react';
import OptionItem from './OptionItem';
import { LIST_ADD_SELECT, LIST_NO_HEADING } from "../../../../../../constants/constants"

const Options = (props) => {
    const [options, setOptions] = useState(props.data.options);

    const isIncludeSelect = () => {
        return LIST_ADD_SELECT.includes(props.data.type)
    }

    const includeHeader = () => {
        return !LIST_NO_HEADING.includes(props.data.type)
    }

    const deleteOption = (index) => {
        let newList = options;
        newList = newList.splice(index, 1)
        setOptions(newList)
    }

    return (
        <div className="builder-options" >
            <h3>Options</h3>
            <table >
                <tbody>
                    {
                        options?.map((item, index) => (
                            <OptionItem
                                data={item}
                                key={index}
                                index={index}
                                register={props.register}
                                name={`fields-${props.index}`}
                                deleteOption={deleteOption}
                                includeSelect={isIncludeSelect()}
                                noHeading={includeHeader()}
                                type={props.data.type} />
                        ))
                    }
                </tbody>
            </table>
            <button type="button" className="og-button--small" onClick={() => setOptions(options.concat({ key: '', label: '', selected: false }))} >+ Option</button>
            <input type='hidden' name={`fields-${props.index}-options`} value={options.length} />
        </div>
    );
}

export default Options;