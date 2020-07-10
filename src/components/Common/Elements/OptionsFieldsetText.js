import React, { useState } from 'react';
import {xIcon} from '../../../constants/icons';

const OptionsFieldsetText = props => {
  const [list, setList] = useState(props.data['options']);

  const removeItem = index => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <div className="og-attributes">
      <h4>Inputs</h4>
      {
        list.map((item, index) => (
          <Item data={item} key={index} index={index} removeItem={removeItem} register={props.register} name={`fields-${props.index}`} type='options' />
        ))
      }
      <button type="button" onClick={() => setList(list.concat({ key: '', label: '' }))}>+ Add Input</button>
    </div>
  )
}

const Item = ({register, name, type, index, data, removeItem}) => (
  <div className="og-attribute">
    <input type="text" placeholder="Enter key" ref={register} name={`${name}-${type}-${index}-key`} defaultValue={data.key} />
    <input type="text" placeholder="Enter label" ref={register} name={`${name}-${type}-${index}-value`} defaultValue={data.label} />
    <button type="button" onClick={() => removeItem(index)}>{xIcon}</button>
  </div>
)

export default OptionsFieldsetText;