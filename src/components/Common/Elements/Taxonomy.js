import React from 'react';
import DropDown from './DropDown';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Taxonomy = ({ name, defaultValue, register, label, type }) => {
    return (<DivRow label={getLabel(label, type)}>
        <DropDown name={name} ref={register} keyValue={name} defaultValue={defaultValue} /></DivRow>
    )
}

export default Taxonomy;