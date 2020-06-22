import React from 'react';

const DropDown = ({ name, register, keyValue, defaultValue }) => {
    return (
        <select name={name} ref={register} key={keyValue} className="dropdown">
            <option value={defaultValue}>{defaultValue}</option>
        </select>
    )

}

export default DropDown

