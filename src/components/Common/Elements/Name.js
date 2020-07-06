import React from 'react';
import Input from '../Input';

const Name = ({...props}) => <Input {...props} label="Label" tooltip="Optional field label. If empty, the field input is 100% width." />

export default Name;