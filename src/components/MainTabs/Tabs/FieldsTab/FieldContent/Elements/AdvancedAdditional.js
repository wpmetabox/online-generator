import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from "../../../../../../constants/constants";

const AdvancedAdditional = (props) => {
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
                <AdvancedAdditionalItem data={item} key={index} index={index} register={props.register} name={`fields_${props.index}`} />
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(attributes.concat({ key: '', label: '' }))} >{customData?.buttonName}</button>
        <input type='hidden' name={`fields_${props.index}_attributes`} value={attributes?.length} />
      </div>
    )
}

export default AdvancedAdditional;