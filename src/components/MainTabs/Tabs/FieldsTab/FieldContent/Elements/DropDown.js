import React from 'react';

const DropDown = ({ name, ref, keyValue, defaultValue }) => {
    return (
        <select name={name} ref={ref} key={keyValue} className="dropdown">
            <option value={defaultValue}>{defaultValue}</option>
        </select>
    )

}

export default DropDown

