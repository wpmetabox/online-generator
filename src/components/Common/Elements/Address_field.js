import React from 'react';
import Input from './Input';
import DivRow from '../DivRow';
import { getLabel } from '../../../utility/functions';

const Address_field = ({ name, defaultValue, ref, label, type }) => {
    return (
        <DivRow label={getLabel(label, type)}  >
            <Input type='text' name={name} defaultValue={defaultValue} ref={ref} keyValue={name} />
        </DivRow>
    )
}

export default Address_field;