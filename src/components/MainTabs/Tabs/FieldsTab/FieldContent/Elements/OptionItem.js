import React from 'react';
import SmallInput from './SmallInput';

export const OptionItem = (props) => {
    return (
        <tr>
            <td width="45%">
                <SmallInput placeholder="Enter value" />
            </td>
            <td width="45%">
                <SmallInput placeholder="Enter label" />
            </td>
            <td width="10%">
                <button type="button" className="og-button--small">
                    <img src="./trash.png" />
                </button>
            </td>
        </tr>
    )
}

export default OptionItem;