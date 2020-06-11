import React, { useState } from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import AdvancedAdditional from './Elements/AdvancedAdditional';
import DataList from "./Elements/DataList"
import { LIST_OPTION, DATA_LIST } from "../../../../../constants/constants";

const AdvancedContent = (props) => {
  const options = LIST_OPTION.filter(item => item.option === props.type)
  const dataLists = DATA_LIST.filter(item => item === props.type)
  
  return (
    <div className="advanced_content">
      <RowContainer label="Before" >
        <Input name={`fields-${props.index}-before`} defaultValue={props.data.before} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="After" >
        <Input name={`fields-${props.index}-after`} defaultValue={props.data.after} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="Custom CSS class" >
        <Input name={`fields-${props.index}-class`} defaultValue={props.data.class} ref={props.register} type="text" />
      </RowContainer>
      <AdvancedAdditional type="attributes" data={props.data} index={props.index} register={props.register}/>
      {options.length ? <AdvancedAdditional type={options[0].type} data={props.data} index={props.index} register={props.register}/> : null}
      {dataLists.length ? <DataList type={dataLists[0].type} data={props.data} index={props.index} register={props.register} /> : null}
    </div>
  );
}

export default AdvancedContent;