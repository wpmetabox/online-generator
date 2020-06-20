import React from 'react';
import Input from '../../Common/Input';
import { generalInputs } from '../../../constants/constants';

const GeneralTab = ({register}) => generalInputs.map((item, index) => <Input data={item} ref={register} key={index} />)

export default GeneralTab;
