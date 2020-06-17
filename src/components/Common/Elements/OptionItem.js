import React from 'react';
import SmallInput from './SmallInput';

export const OptionItem = (props) => {
    const WIDTH = props.includeSelect ? '35%' : '45%';
    const isImageSelect = props.type === "image_select";
    const label = isImageSelect ? "Image URL" : "Label";
    const placeholder = isImageSelect ? "Enter Image URL" : "Enter label";

    return (
        <>
            {
                props.noHeading && <tr>
                    <th>Value</th>
                    <th>{label}</th>
                    <th id="center">Selected</th>
                </tr>
            }
            <tr>
                <td width={WIDTH}>
                    <SmallInput placeholder="Enter value" defaultValue={props.data.key} ref={props.register} name={`${props.name}-options-${props.index}-key`} />
                </td>
                <td width={WIDTH}>
                    <SmallInput placeholder={placeholder} defaultValue={props.data.label} ref={props.register} name={`${props.name}-options-${props.index}-value`} />
                </td>
                <td width="15%" style={{ display: props.includeSelect ? 'initial' : 'none' }}>
                    <input type="checkbox" defaultChecked={props.data.selected} ref={props.register} name={`${props.name}-options-${props.index}-selected`} className="option_item_checkbox" />
                </td>
                <td width="10%">
                    <button onClick={() => props.deleteOption(props.index)} type="button" className="og-button--small">
                        <img src="./trash.png" alt="trash_icon" />
                    </button>
                </td>
            </tr>
        </>

    )
}

export default OptionItem;