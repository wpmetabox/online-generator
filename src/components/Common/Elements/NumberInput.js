import React from 'react';
import Input from '../Input';
import {getLabel} from '../../../utility/functions';

const Id = ({label, type, ...rest}) => <Input {...rest} type="number" label={getLabel(label, type)} />
export default Id;