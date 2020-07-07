import React from 'react';
import Input from '../Input';

const Id = props => <Input {...props} label="ID" type="text" required="true" tooltip="Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores." />
export default Id;