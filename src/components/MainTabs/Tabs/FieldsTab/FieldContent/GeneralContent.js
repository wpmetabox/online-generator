import React from 'react';
import { fields } from '../../../../../constants/constants';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import Checkbox from './Elements/Checkbox';
import Options from './Elements/Options';
import { getLabel, getElementType } from '../../../../../utility/functions';
import { NUMBER_INPUT, TEXT_INPUT, CHECKBOX } from '../../../../../constants/constants';

const GeneralContent = (props) => {
  const getElement = name => {
    const field = fields[props.type];
    const elementName = `fields_${props.index}_${name}`
    const elementType = getElementType(name)

    let result = ''
    if (elementType === TEXT_INPUT) {
      let defaultValue = field[name];
      if (name === 'id') {
        if (props.name.includes('copy')) {
          defaultValue = props.name
        } else {
          defaultValue = `${props.name}_${props.index + 1}`
        }
      }
      result = <Input type='text' name={elementName} defaultValue={defaultValue} ref={props.register} keyValue={elementName} />
    }
    if (elementType === NUMBER_INPUT) {
      result = <Input type='number' name={elementName} keyValue={elementName} />
    }
    if (elementType === CHECKBOX) {
      result = <Checkbox name={elementName} ref={props.register} keyValue={elementName} />
    }

    return result;
  }

  const isOptionElement = (keyName) => {
    return keyName === 'options';
  }

  return (
    <div className="field_content">
      {
        Object.keys(fields[props.type]).map((keyName, keyIndex) =>
          isOptionElement(keyName)
            ? <Options key={keyName + keyIndex} register={props.register} index={props.index} defaultValue={[]} />
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