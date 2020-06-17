import React from 'react';
import SmallInput from './SmallInput';

const AdvancedAdditionalItem = (props) => {
    return (
        <tr>
            <td width="45%">
                <SmallInput placeholder="Enter value" ref={props.register} name={`${props.name}-${props.type}-${props.index}-key`} defaultValue={props.data.key} />
            </td>
            <td width="45%">
                <SmallInput placeholder="Enter label" ref={props.register} name={`${props.name}-${props.type}-${props.index}-value`} defaultValue={props.data.label} />
            </td>
            <td width="10%">
                <button type="button" className="og-button--small">
                    <img src="./trash.png" alt="trash_icon" />
                </button>
            </td>
        </tr>
    )
}

export default AdvancedAdditionalItem;