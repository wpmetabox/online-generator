import React from 'react';
import Input from '../../Common/Input';

const GeneralTab = ({register}) => (
  <>
    <Input register={register} name="function_name" label="Function Name" defaultValue="your_prefix_register_meta_boxes" />
    <Input register={register} name="text_domain" label="Text Domain" defaultValue="online-generator" />
    <Input register={register} name="prefix" label="Field ID Prefix" defaultValue="prefix-" description="Prefix for all fields' ID. Leave empty to ignore or use _ to make fields hidden." />
  </>
)
export default GeneralTab;