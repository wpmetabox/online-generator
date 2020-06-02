import React from 'react';

const DivRow = ({ label, children }) => {
  return (
    <div className="inline_element">
      <div className="left_col">
        <label className="label">{label}</label>
      </div>
      <div className="right_col">
        {children}
      </div>
    </div>
  )
}

export default DivRow;