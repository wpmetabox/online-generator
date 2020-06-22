import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Placeholder = ({ name, defaultValue, register, label, type }) => {
    return (<DivRow label={getLabel(label, type)}>
        <Input type='text' name={name} defaultValue={defaultValue} ref={register} keyValue={name} /></DivRow>
    )
}

export default Placeholder;