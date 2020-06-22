import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Mime_type = ({ name, defaultValue, register, label, type }) => {
    return (<DivRow label={getLabel(label, type)}>
        <Input type='text' name={name} defaultValue={defaultValue} ref={register} keyValue={name} /></DivRow>
    )
}

export default Mime_type;