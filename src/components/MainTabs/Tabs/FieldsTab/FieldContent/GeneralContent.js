import React from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import Checkbox from './Elements/Checkbox';
import Options from './Elements/Options';
import { getLabel, getElementType } from '../../../../../utility/functions';
import { NUMBER_INPUT, TEXT_INPUT, CHECKBOX } from '../../../../../constants/constants';

const GeneralContent = (props) => {
  console.log('TYPE: ', props.fieldData.type);
  const getElement = name => {
    const fieldData = props.fieldData;
    const elementName = `fields_${props.index}_${name}`
    const elementType = getElementType(name)
    let defaultValue = fieldData[name];

    let result = ''
    if (elementType === TEXT_INPUT) {
      result = <Input type='text' name={elementName} defaultValue={defaultValue} ref={props.register} keyValue={elementName} />
    }
    if (elementType === NUMBER_INPUT) {
      result = <Input type='number' name={elementName} keyValue={elementName} defaultValue={defaultValue} />
    }
    if (elementType === CHECKBOX) {
      result = <Checkbox name={elementName} ref={props.register} keyValue={elementName} defaultValue={defaultValue} />
    }

    return result;
  }

  const isIdInput = (name) => {
    return name === 'id'
  }

  const isOptionElement = (keyName) => {
    return keyName === 'options';
  }

  return (
    <div className="field_content">
      {
        Object.keys(props.fieldData).map((keyName, keyIndex) =>
          isOptionElement(keyName)
            ? <Options key={keyName + keyIndex} register={props.register} index={props.index}  data={props.fieldData} />
            : <RowContainer label={getLabel(keyName)} key={getLabel(keyName) + keyIndex} >
              {
                getElement(keyName)
              }
            </RowContainer>
        )
      }
    </div>
  );
}

export default GeneralContent;