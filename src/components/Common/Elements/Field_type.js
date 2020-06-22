import React from 'react';
import RadioCheckbox from './RadioCheckbox'
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Field_type = ({ name, defaultValue, ref, label, type }) => {
    return <DivRow label={getLabel(label, type)}><RadioCheckbox name={name} ref={ref} keyValue={name} defaultValue={defaultValue} type={type} /></DivRow>
}

export default Field_type;