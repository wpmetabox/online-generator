import React from 'react';
import DropDown from './DropDown';
import { getLabel } from '../../../../../../utility/functions';
import RowContainer from '../Elements/RowContainer';

const Taxonomy = ({ name, defaultValue, ref, label, type }) => {
    return (<RowContainer label={getLabel(label, type)}>
        <DropDown name={name} ref={ref} keyValue={name} defaultValue={defaultValue} /></RowContainer>
    )
}

export default Taxonomy;