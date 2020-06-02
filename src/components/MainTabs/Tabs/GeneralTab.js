import React from 'react';
import Input from '../../Common/Input';
import { generalInputs } from '../../../constants/constants';

const GeneralTab = (props) => {

  return (
    <div>
      {
        generalInputs.map((item, index) =>
          <Input data={item} ref={props.register} key={index} />
        )
      }
    </div>
  )
}

export default GeneralTab;
