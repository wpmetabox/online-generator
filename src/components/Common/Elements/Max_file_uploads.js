import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Max_file_uploads = ({ name, defaultValue, register, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Input type='number' ref={register} name={name} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Max_file_uploads;