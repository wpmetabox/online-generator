import React from 'react';
import RadioCheckbox from './RadioCheckbox'
import { getLabel } from '../../../utility/functions';
import RowContainer from '../Elements/RowContainer';

const Field_type = ({ name, defaultValue, ref, label, type }) => {
    return <RowContainer label={getLabel(label, type)}><RadioCheckbox name={name} ref={ref} keyValue={name} defaultValue={defaultValue} type={type} /></RowContainer>
}

export default Field_type;