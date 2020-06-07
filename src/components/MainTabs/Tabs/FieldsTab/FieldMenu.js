import React, { useState } from 'react';
import { fieldTypes, fields } from '../../../../constants/constants';
import FieldItem from './FieldItem';

const FieldMenu = (props) => {
  const [active, setActive] = useState([]);

  const onSelect = value => {
    setActive([value]);
  }

  return (
    <div className="field_menu">
      {
        Object.keys(fieldTypes).map((keyName, keyIndex) =>
          <div className="field_menu_item" key={keyIndex}>
            <h4 className="title" onClick={() => onSelect(keyName)}>{keyName}</h4>
            <div className="online-generator__accordion-collapse" style={{ display: active.includes(keyName) ? 'initial' : 'none' }} >
              <div className="og-panel__body">
                {
                  Object.keys(fieldTypes[keyName]).map((key, index) =>
                    <FieldItem title={fieldTypes[keyName][key]} type={key} key={index} onSelectField={props.onSelxectField} />
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default FieldMenu;