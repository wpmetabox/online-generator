import React from 'react';
import Checkbox from './Checkbox';
import DivRow from '../DivRow';
import { getLabel } from '../../../utility/functions';

const Clone = ({ name, defaultValue, register, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Checkbox name={name} ref={register} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Clone;