import React, { useState } from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import AdvancedAdditional from './Elements/AdvancedAdditional';
import { ADVANCED_ADDITIONAL, LIST_WORDPRESS_FIELDS, LIST_OPTION } from "../../../../../constants/constants";

const AdvancedContent = (props) => {
  const options = LIST_OPTION.filter(item => item.option === props.type)

  return (
    <div className="advanced_content">
      <RowContainer label="Before" >
        <Input name={`fields_${props.index}_before`} defaultValue={props.data.before} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="After" >
        <Input name={`fields_${props.index}_after`} defaultValue={props.data.after} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="Custom CSS class" >
        <Input name={`fields_${props.index}_class`} defaultValue={props.data.class} ref={props.register} type="text" />
      </RowContainer>
      <AdvancedAdditional type="attribute" data={props.data} index={props.index}/>
      {options.length ? <AdvancedAdditional type={options[0].type} data={props.data} index={props.index}/> : null}
    </div>
  );
}

export default AdvancedContent;