import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Mime_type = ({ name, defaultValue, ref, label, type }) => {
    return (<DivRow label={getLabel(label, type)}>
        <Input type='text' name={name} defaultValue={defaultValue} ref={ref} keyValue={name} /></DivRow>
    )
}

export default Mime_type;