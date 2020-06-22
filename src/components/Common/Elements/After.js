import React from 'react';
import Input from './Input';
import DivRow from '../DivRow';
import { getLabel } from '../../../utility/functions';

const After = (props) => {
    return (
        <DivRow label={getLabel(props.label, props.type)} >
            <Input name={props.name} defaultValue={props.defaultValue} ref={props.register} type="text" />
        </DivRow>
    )
}

export default After;