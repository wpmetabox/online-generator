import React, { useState } from 'react';
import AdvancedAdditionalItem from './AdvancedAdditionalItem.js';
import { ADVANCED_ADDITIONAL } from '../../../constants/constants';

const Query_args = (props) => {
    const [optionalList, setAttributes] = useState(props.data['query_args']);
    const customData = ADVANCED_ADDITIONAL['query_args'] ;
    
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
                <AdvancedAdditionalItem data={item} key={index} index={index} register={props.register} name={`fields-${props.index}`} type='query_args'/>
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(optionalList.concat({ key: '', label: '' }))} >{customData?.buttonName}</button>
        <input type='hidden' name={`fields-${props.index}-query_args`} value={optionalList?.length} />
      </div>
    )
}

export default Query_args;