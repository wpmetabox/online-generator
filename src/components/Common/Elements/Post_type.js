import React from 'react';
import DropDown from './DropDown';
import { getLabel } from '../../../utility/functions';
import DivRow from '../DivRow';

const Post_type = ({ name, defaultValue, ref, label, type }) => {
    return (<DivRow label={getLabel(label, type)}>
        <DropDown name={name} ref={ref} keyValue={name} defaultValue={defaultValue} /></DivRow>
    )
}

export default Post_type;