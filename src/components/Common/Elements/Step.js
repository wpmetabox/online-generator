import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Step = ({ name, defaultValue, register, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Input type='number' ref={register} name={name} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Step;