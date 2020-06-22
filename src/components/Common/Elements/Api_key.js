import React from 'react';
import Input from './Input';
import DivRow from '../DivRow';
import { getLabel } from '../../../utility/functions';

const Api_key = ({ name, defaultValue, ref, label, type }) => {
    return (
        <DivRow label={getLabel(label, type)}>
            <Input type='text' name={name} defaultValue={defaultValue} ref={ref} keyValue={name} />
        </DivRow>
    )
}

export default Api_key;