import React from 'react';
import SmallInput from './SmallInput';

export const OptionItem = (props) => {
    const WIDTH = props.hasSelected ? '35%' : '45%';
    const isImageSelect = props.type === "image_select";
    const label = isImageSelect ? "Image URL" : "Label";
    const placeholder = isImageSelect ? "Enter Image URL" : "Enter label";
    return (
        <>
            { props.noHeading && 
                (<tr>
                    <th>Value</th>
                    <th>{label}</th>
                    <th id="center">Selected</th>
                </tr>)
            }
            <tr>
                <td width={WIDTH}>
                    <SmallInput placeholder="Enter value" defaultValue={props.item.key} ref={props.register} name={`${props.name}_options_${props.index}_key`} />
                </td>
                <td width={WIDTH}>
                    <SmallInput placeholder={placeholder} defaultValue={props.item.label} ref={props.register} name={`${props.name}_options_${props.index}_label`} />
                </td>
                { props.hasSelected && 
                    (
                        <td width="15%">
                            <input type="checkbox" name={`${props.name}_options_${props.index}_label`} />
                        </td>
                    ) 
                }
                <td width="10%">
                    <button type="button" className="og-button--small">
                        <img src="./trash.png" />
                    </button>
                </td>
            </tr>
        </>
        
    )
}

export default OptionItem;