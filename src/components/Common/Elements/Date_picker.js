import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from '../../../constants/constants';

const Date_picker = (props) => {
    const [optionalList, setAttributes] = useState(props.data['date_picker']);
    const customData = ADVANCED_ADDITIONAL['date_picker'] ;
    
    return (
        <div className="custom_attributes">
        <h3>
          {customData?.titleLink 
            ? <a href={customData?.titleLink}>{customData?.title}</a>
            : <p>{customData?.title}</p>
          }
        </h3>
        <table >
          <tbody>
            {
              optionalList?.map((item, index) => (
                <AdvancedAdditionalItem data={item} key={index} index={index} register={props.register} name={`fields-${props.index}`} type='date_picker'/>
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(optionalList.concat({ key: '', label: '' }))} >{customData?.buttonName}</button>
        <input type='hidden' name={`fields-${props.index}-date_picker`} value={optionalList?.length} />
      </div>
    )
}

export default Date_picker;