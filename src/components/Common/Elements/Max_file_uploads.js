import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import RowContainer from '../Elements/RowContainer';

const Max_file_uploads = ({ name, defaultValue, ref, label, type }) => {
    return <RowContainer label={getLabel(label, type)}><Input type='number' ref={ref} name={name} keyValue={name} defaultValue={defaultValue} /></RowContainer>
}

export default Max_file_uploads;