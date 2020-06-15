import React from 'react';
import Checkbox from './Checkbox'
import { getLabel } from '../../../../../../utility/functions';
import RowContainer from '../Elements/RowContainer';

const Inline = ({ name, defaultValue, ref, label, type }) => {
    return <RowContainer label={getLabel(label, type)}><Checkbox name={name} ref={ref} keyValue={name} defaultValue={defaultValue} /></RowContainer>
}

export default Inline;