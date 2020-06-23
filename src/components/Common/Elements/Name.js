import React from 'react';
import Input from '../Input';
import { getLabel } from '../../../utility/functions';

const Name = ({ label, type, ...rest }) => <Input {...rest} label={getLabel(label, type)} />
export default Name;