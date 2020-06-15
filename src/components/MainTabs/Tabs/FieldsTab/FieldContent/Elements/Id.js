import React from 'react';
import Input from './Input';
import RowContainer from '../Elements/RowContainer';
import { getLabel } from '../../../../../../utility/functions';

const Id = ({ name, defaultValue, ref, label, keyValue, type }) => {
    return (
        <RowContainer label={getLabel(label, type)} >
            <Input type='text' name={name} defaultValue={defaultValue} ref={ref} keyValue={keyValue} />
        </RowContainer>
    )
}

export default Id;