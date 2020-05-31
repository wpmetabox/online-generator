import React from 'react';

const DivRow = ({ label, children }) => {
  return (
    <div className="inline_element">
      <div className="left_col">
        <label className="label">{label}</label>
      </div>
      {children}
    </div>
  )
}

export default DivRow;