import React from 'react';

const DivRow = ({ label, children, className = '', htmlFor = ''}) => {
  return (
    <div className={`og-field ${className}`}>
      <label className="og-label" htmlFor={htmlFor}>{label}</label>
      <div className="og-input">{children}</div>
    </div>
  )
}

export default DivRow;