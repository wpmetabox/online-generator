import React from 'react';
import Input from './Input';
import DivRow from '../DivRow';
import { getLabel } from '../../../utility/functions';

const Id = ({ name, defaultValue, register, label, type }) => {
    return (
        <DivRow label={getLabel(label, type)} htmlFor={name} >
            <input type='text' defaultValue={defaultValue} ref={register} name={name} id={name} />
        </DivRow>
    )
}

export default Id;