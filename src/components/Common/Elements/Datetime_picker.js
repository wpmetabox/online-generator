import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from '../../../constants/constants';

const Datetime_picker = (props) => {
    const [optionalList, setAttributes] = useState(props.data['datetime_picker']);
    const customData = ADVANCED_ADDITIONAL['datetime_picker'] ;
    
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
                <AdvancedAdditionalItem data={item} key={index} index={index} register={props.register} name={`fields-${props.index}`} type='datetime_picker'/>
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(optionalList.concat({ key: '', label: '' }))} >{customData?.buttonName}</button>
        <input type='hidden' name={`fields-${props.index}-datetime_picker`} value={optionalList?.length} />
      </div>
    )
}

export default Datetime_picker;