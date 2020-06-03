import React from 'react';
import { fields } from '../../../../../constants/constants';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';
import Checkbox from './Elements/Checkbox';
import { getLabel } from '../../../../../utility/functions';

const GeneralContent = (props) => {
  console.log('asdasd', props)
  const getElement = name => {
    const inputsText = ['id', 'name', 'desc', 'std', 'placeholder', 'min', 'max'];
    const inputsNumber = ['size'];
    const checkboxes = ['clone']
    const field = fields[props.type];
    const elementName = `fields_${props.index}_${name}`

    let result = ''
    if (inputsText.includes(name)) {
      let defaultValue = field[name];
      if (name === 'id') {
        defaultValue = `${props.type}_${props.index + 1}`
      }

      result = <Input type='text' name={elementName} defaultValue={defaultValue} ref={props.register} key={elementName} />
    }
    if (inputsNumber.includes(name)) {
      result = <Input type='number' name={elementName} key={elementName} />
    }
    if (checkboxes.includes(name)) {
      result = <Checkbox name={elementName} ref={props.register} key={elementName} />
    }

    return result;
  }


  return (
    <div className="field_content">
      {
        Object.keys(fields[props.type]).map((keyName, keyIndex) =>
          <RowContainer label={getLabel(keyName)} key={getLabel(keyName) + keyIndex} >
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