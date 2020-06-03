import React from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';

const AdvancedContent = (props) => {
  return (
    <div className="advanced_content">
      <RowContainer label="Before" >
        <Input name={`fields_${props.index - 1}_before`} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer  >
        <Input label="After" name={`fields_${props.index - 1}_after`} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="Custom CSS class" >
        <Input name={`fields_${props.index - 1}_class`} ref={props.register} type="text" />
      </RowContainer>
      <div className="custom_attributes">
        <h3><a href="https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes" target="_blank">Custom attributes</a></h3>
      </div>
    </div>
  );
}

export default AdvancedContent;