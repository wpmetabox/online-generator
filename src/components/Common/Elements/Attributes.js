import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from '../../../constants/constants';

const Attributes = (props) => {
    const customData = ADVANCED_ADDITIONAL['attributes'];

    const [list, setList] = useState(props.data['attributes']);
    const removeItem = index => {
      let newList = list;
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
            <AdvancedAdditionalItem data={item} key={index} index={index} removeItem={removeItem} register={props.register} name={`fields-${props.index}`} type='attributes'/>
          ))
        }
        <button type="button" onClick={() => setList(list.concat({ key: '', label: '' }))}>+ Add Attribute</button>
        <input type='hidden' name={`fields-${props.index}-attributes`} value={list.length} />
      </div>
    )
}

export default Attributes;