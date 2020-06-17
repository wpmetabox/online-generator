import React from 'react';
import SmallInput from './SmallInput';

const DataItem = ({ ref, index, dataItem }) => {
    return (
        <tr>
            <td width="100%">
                <SmallInput placeholder="Enter value" defaultValue={dataItem} ref={ref} name={`fields-${index}-datalist-options-0`} />
            </td>
            <td>
                <button type="button" className="og-button--small">
                    <img src="./trash.png" alt="trash_icon" />
                </button>
            </td>
        </tr>
    )
}

export default DataItem; 