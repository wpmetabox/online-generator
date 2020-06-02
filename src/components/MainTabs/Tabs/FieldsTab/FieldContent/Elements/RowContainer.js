import React from 'react';
import './Element.scss';

const RowContainer = ({ label, children }) => {
    return (
        <div className="row_container" >
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
