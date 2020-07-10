import React from 'react';
import ReactTooltip from 'react-tooltip';
import {infoIcon} from '../../constants/icons';

const DivRow = ({label, children, className = '', htmlFor = '', description = '', tooltip = '', keyValue = '', required = false}) => {
  return (
    <div className={`og-field ${className}`} key={keyValue}>
      <label className="og-label" htmlFor={htmlFor}>
        <span dangerouslySetInnerHTML={{__html: label}} />
        {required && <span className="og-required">*</span>}
        {tooltip &&
        <>
          <span className="og-tooltip-icon" data-tip={tooltip}>{infoIcon}</span>
          <ReactTooltip effect="solid" />
        </>
        }
      </label>
      <div className="og-input">
        {children}
        {description && <div className="og-description">{description}</div>}
      </div>
    </div>
  )
}

export default DivRow;