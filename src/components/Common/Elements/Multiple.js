import React from 'react';
import Checkbox from './Checkbox'
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Multiple = ({ name, defaultValue, register, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Checkbox name={name} ref={register} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Multiple;