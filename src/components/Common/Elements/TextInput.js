import React from 'react';
import { getLabel } from '../../../utility/functions';
import Input from '../Input';

const TextInput = ( { label, type, ...rest } ) => <Input { ...rest } label={ getLabel( label, type ) } />;
export default TextInput;