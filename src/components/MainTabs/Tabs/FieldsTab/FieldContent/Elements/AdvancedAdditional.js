import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from "../../../../../../constants/constants";

const AdvancedAdditional = (props) => {
  console.log('pro111111ps: ', props.register);
    const [attributes, setAttributes] = useState(props.data.attributes);
    const customData = ADVANCED_ADDITIONAL[props.type] ;
    
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
              attributes?.map((item, index) => (
                <AdvancedAdditionalItem data={item} key={index} index={index} register={props.register} name={`fields-${props.index}`} />
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(attributes.concat({ key: '', label: '' }))} >{customData?.buttonName}</button>
        <input type='hidden' name={`fields-${props.index}-attributes`} value={attributes?.length} />
      </div>
    )
}

export default AdvancedAdditional;