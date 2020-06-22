import React from 'react';
import Checkbox from './Checkbox';
import DivRow from '../DivRow';
import { getLabel } from '../../../utility/functions';

const Clone = ({ name, defaultValue, ref, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Checkbox name={name} ref={ref} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Clone;