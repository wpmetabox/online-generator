import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Size = ({ name, defaultValue, ref, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Input type='number' ref={ref} name={name} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Size;