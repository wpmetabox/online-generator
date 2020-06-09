import React from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import Checkbox from './Elements/Checkbox';
import Options from './Elements/Options';
import { getLabel, getElementType } from '../../../../../utility/functions';
import { NUMBER_INPUT, TEXT_INPUT, CHECKBOX, RADIO_CHECKBOX, DROPDOWN_MENU, LIST_ADD_SELECT, LIST_NO_HEADING } from '../../../../../constants/constants';
import DropDown from './Elements/DropDown';
import RadioCheckbox from './Elements/RadioCheckbox';

const GeneralContent = (props) => {
  // console.log('FIELD DATA: ', props.fieldData);
  // console.log('KEYs: ', Object.keys(props.fieldData));
  console.log('TYPE: ', (props));
  const getElement = name => {
    const fieldData = props.fieldData;
    const elementName = `fields-${props.index}-${name}`
    const elementType = getElementType(name)
    let defaultValue = fieldData[name];
    let result = ''
    // custom std for check box
    if (name === 'std' && props.type === 'checkbox') {
      
      result = <Checkbox name={elementName} ref={props.register} keyValue={elementName} defaultValue={defaultValue} />
    } else {
      if (elementType === TEXT_INPUT) {
        result = <Input type='text' name={elementName} defaultValue={defaultValue} ref={props.register} keyValue={elementName} />
      }
      if (elementType === NUMBER_INPUT) {
        result = <Input type='number' name={elementName} keyValue={elementName} defaultValue={defaultValue} />
      }
      if (elementType === CHECKBOX) {
        result = <Checkbox name={elementName} ref={props.register} keyValue={elementName} defaultValue={defaultValue} />
      }
      if (elementType === RADIO_CHECKBOX) {
        result = <RadioCheckbox name={elementName} ref={props.register} keyValue={elementName} defaultValue={defaultValue} type={props.type} />
      }
      if (elementType === DROPDOWN_MENU) {
        result = <DropDown name={elementName} ref={props.register} keyValue={elementName} defaultValue={defaultValue} />
      }
    }


    return result;
  }

  const checkHasSelect = () => {
    return LIST_ADD_SELECT.includes(props.fieldData.type)
}
  const checkHasHeading = () => {
      return !LIST_NO_HEADING.includes(props.fieldData.type)
  }

  const renderElement = (keyName, keyIndex) => {
    let element;

    element = <RowContainer label={getLabel(keyName, props.type)} key={getLabel(keyName) + keyIndex} >
    {
      getElement(keyName)
    }
  </RowContainer>

    if (keyName === 'options') {
      element = <Options 
                  key={getLabel(keyName) + keyIndex} 
                  register={props.register} 
                  index={props.index}  
                  data={props.fieldData} 
                  hasSelect={checkHasSelect()}
                  noHeading={checkHasHeading()}
                />
    }
    if (keyName === 'type') {
      element = null;
    }
    
    return element
    
  }

  return (
    <div className="field_content">
      {
        Object.keys(props.fieldData).map((keyName, keyIndex) =>
          renderElement(keyName, keyIndex)
        )
      }
    </div>
  );
}

export default GeneralContent;