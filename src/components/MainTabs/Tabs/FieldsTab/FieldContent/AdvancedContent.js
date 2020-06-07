import React, { useState } from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import AttributeItem from './Elements/AttributeItem';

const AdvancedContent = (props) => {
  const [attributes, setAttributes] = useState(props.data.attributes);

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
              attributes?.map((item, index) => (
                <AttributeItem data={item} key={index} index={index} register={props.register} name={`fields_${props.index}`} />
              ))
            }
          </tbody>
        </table>
        <button type="button" className="og-button--small" onClick={() => setAttributes(attributes.concat({ key: '', label: '' }))} >+ Attribute</button>
      </div>
      <input type='hidden' name={`fields_${props.index}_attributes`} value={attributes.length} />
    </div>
  );
}

export default AdvancedContent;