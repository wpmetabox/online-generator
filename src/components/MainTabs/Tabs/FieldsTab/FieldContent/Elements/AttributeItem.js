import React from 'react';
import SmallInput from './SmallInput';

const AttributeItem = (props) => {
    return (
        <tr>
            <td width="45%">
                <SmallInput placeholder="Enter value" ref={props.register} name={`${props.name}_attributes_${props.item}_key`} />
            </td>
            <td width="45%">
                <SmallInput placeholder="Enter label" ref={props.register} name={`${props.name}_attributes_${props.item}_label`} />
            </td>
            <td width="10%">
                <button type="button" className="og-button--small">
                    <img src="./trash.png" />
                </button>
            </td>
        </tr>
    )
}

export default AttributeItem;