import React from 'react';

const DivRow = ({label, children, className = '', htmlFor = '', description = '', keyValue = ''}) => {
  return (
    <div className={`og-field ${className}`} key={keyValue}>
      <label className="og-label" htmlFor={htmlFor}>{label}</label>
      <div className="og-input">
        {children}
        {description && <div className="og-description">{description}</div>}
      </div>
    </div>
  )
}

export default DivRow;