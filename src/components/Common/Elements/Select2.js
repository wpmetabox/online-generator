import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from '../../../constants/constants';

const Select2 = props => {
    const [list, setList] = useState(props.data['select2']);
    const customData = ADVANCED_ADDITIONAL['select2'] ;
    const removeItem = index => {
      let newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    }

    return (
      <div className="og-attributes">
        <h4>
          {
            customData?.titleLink
            ? <a href={customData?.titleLink} target="_blank" rel="noreferrer noopener">{customData?.title}</a>
            : customData?.title
          }
        </h4>
        {
          list.map((item, index) => (
            <AdvancedAdditionalItem data={item} key={index} index={index} removeItem={removeItem} register={props.register} name={`fields-${props.index}`} type='js_options' />
          ))
        }
        <button type="button" onClick={() => setList(list.concat({ key: '', label: '' }))}>+ Add Option</button>
      </div>
    )
}
export default Select2;