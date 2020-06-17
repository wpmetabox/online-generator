import React from 'react';
import Input from './Input';
import { getLabel } from '../../../utility/functions';
import RowContainer from '../Elements/RowContainer';

const Prefix = ({ name, defaultValue, ref, label, type }) => {
    return (<RowContainer label={getLabel(label, type)}>
        <Input type='text' name={name} defaultValue={defaultValue} ref={ref} keyValue={name} /></RowContainer>
    )
}

export default Prefix;