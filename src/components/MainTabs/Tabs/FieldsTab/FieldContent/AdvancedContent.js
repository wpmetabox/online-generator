import React, { useState } from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import AdvancedAdditional from './Elements/AdvancedAdditional';
import { ADVANCED_ADDITIONAL, LIST_WORDPRESS_FIELDS } from "../../../../../constants/constants";

const AdvancedContent = (props) => {
  console.log('AdvancedContent TYPE: ', props);
  
  const isSelectAdvanced = props.type === "select_advanced";
  const isSlider = props.type === "slider";
  const isWordPressFields = LIST_WORDPRESS_FIELDS.includes(props.type);

  // const select2 = <AdvancedAdditional title={ADVANCED_ADDITIONAL.select2.title} titleLink={ADVANCED_ADDITIONAL.select2.titleLink} buttonName={ADVANCED_ADDITIONAL.select2.buttonName} data={props.data} index={props.index}/>
  // const queryArguments = <AdvancedAdditional title={ADVANCED_ADDITIONAL.query_args.title} titleLink={ADVANCED_ADDITIONAL.query_args.titleLink} buttonName={ADVANCED_ADDITIONAL.query_args.buttonName} data={props.data} index={props.index}/>
  // const slider = <AdvancedAdditional title={ADVANCED_ADDITIONAL.slider.title} titleLink={ADVANCED_ADDITIONAL.slider.titleLink} buttonName={ADVANCED_ADDITIONAL.slider.buttonName} data={props.data} index={props.index}/>

  // const additionalItem = (type) => {
  //   let zzz = ADVANCED_ADDITIONAL.type
  // }

  // const renderAdditional = () => {
  //   let element;
  //   if (isSelectAdvanced) {
  //     return select2;
  //   }
  //   if (isWordPressFields) {
  //     return queryArguments;
  //   }
  //   if (isSlider) {
  //     return slider;
  //   }
  //   return element
  // }
  const list = [
    {type: 'select2', option: 'datepicker'},
    {type: 'query_args', option: 'datepicker'},
    {type: 'slider', option: 'datepicker'},
    {type: 'editor', option: 'datepicker'},
    {type: 'date_picker', option: 'datepicker'},
    {type: 'datetime_picker', option: 'datepicker'},
    {type: 'time_picker', option: 'datepicker'}
  ]
  const options = list.filter(item => props.type === item.type)

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
      {options ? <AdvancedAdditional type={options.type} data={props.data} index={props.index}/> : null}
    </div>
  );
}

export default AdvancedContent;