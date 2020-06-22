import React from 'react';
import Checkbox from './Checkbox'
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Inline = ({ name, defaultValue, ref, label, type }) => {
    return <DivRow label={getLabel(label, type)}><Checkbox name={name} ref={ref} keyValue={name} defaultValue={defaultValue} /></DivRow>
}

export default Inline;