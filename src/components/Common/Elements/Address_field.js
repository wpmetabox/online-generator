import React from 'react';
import Input from './Input';
import RowContainer from './RowContainer';
import { getLabel } from '../../../utility/functions';

const Address_field = ({ name, defaultValue, ref, label, type }) => {
    return (
        <RowContainer label={getLabel(label, type)}  >
            <Input type='text' name={name} defaultValue={defaultValue} ref={ref} keyValue={name} />
        </RowContainer>
    )
}

export default Address_field;