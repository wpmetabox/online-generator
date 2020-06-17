import React from 'react';
import Input from './Input';
import RowContainer from './RowContainer';
import { getLabel } from '../../../utility/functions';

const Before = (props) => {
    return (
        <RowContainer label={getLabel(props.label, props.type)} >
            <Input name={props.name} defaultValue={props.defaultValue} ref={props.register} type="text" />
        </RowContainer>
    )
}

export default Before;