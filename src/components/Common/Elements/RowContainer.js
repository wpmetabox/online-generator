import React from 'react';
import './Element.scss';

const RowContainer = ({ label, children, keyValue }) => {
    return (
        <div className="row_container" key={keyValue} >
            <div className="left">
                <label className="label">{label}</label>
            </div>
            <div className="right">
                {
                    children
                }
            </div>
        </div>
    );
}


export default RowContainer;
