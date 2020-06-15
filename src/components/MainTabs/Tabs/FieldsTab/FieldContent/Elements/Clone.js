import React from 'react';
import Checkbox from './Checkbox';
import RowContainer from '../Elements/RowContainer';
import { getLabel } from '../../../../../../utility/functions';

const Clone = ({ name, defaultValue, ref, label, type }) => {
    return <RowContainer label={getLabel(label, type)}><Checkbox name={name} ref={ref} keyValue={name} defaultValue={defaultValue} /></RowContainer>
}

export default Clone;