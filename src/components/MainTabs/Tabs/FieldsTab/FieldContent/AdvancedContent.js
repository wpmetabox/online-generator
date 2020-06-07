import React, { useState } from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import AttributeItem from './Elements/AttributeItem';

const AdvancedContent = (props) => {
  const [attributes, setAttributes] = useState(props.defaultValue);

  return (
    <div className="advanced_content">
      <RowContainer label="Before" >
        <Input name={`fields_${props.index}_before`} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="After" >
        <Input name={`fields_${props.index}_after`} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="Custom CSS class" >
        <Input name={`fields_${props.index}_class`} ref={props.register} type="text" />
      </RowContainer>
      <div className="custom_attributes">
        <h3><a href="https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes">Custom attributes</a></h3>
        <table >
          <tbody>
            {
              attributes.map((item, index) => (
                <AttributeItem item={item} key={index} register={props.register} name={`fields_${props.index}`} />
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(attributes.concat(attributes.length))} >+ Attribute</button>
      </div>
    </div>
  );
}

export default AdvancedContent;