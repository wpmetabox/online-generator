import React from 'react';
import Input from '../../Common/Input';
import DivRow from '../../Common/DivRow';

const SettingsTab = ({register}) => {
  return (
    <>
      <h3>Options</h3>
      <Input register={register} name="title" label="Meta box title" defaultValue="Untitled" />
      <Input register={register} name="id" label="Meta box ID" defaultValue="untitled" />
      <DivRow label="Post types" className="og-field--check">
        <label><input type="checkbox" ref={register} name="post_type" value="post" defaultChecked /> Post</label>
        <label><input type="checkbox" ref={register} name="post_type" value="page" /> Page</label>
      </DivRow>
      <DivRow label="Position" htmlFor="context">
        <select ref={register} id="context" name="context" defaultValue="advanced" >
          {contextOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </DivRow>
      <DivRow label="Priority" className="og-field--check">
        <label><input ref={register} type="radio" name="priority" value="high" defaultChecked /> High</label>
        <label><input ref={register} type="radio" name="priority" value="low" /> Low</label>
      </DivRow>
      <h3>Advanced</h3>
      <Input register={register} name="prefix" label="Field ID prefix" defaultValue="prefix-" description="Prefix for all fields' ID. Leave empty to ignore or use _ to make fields hidden." />
      <Input register={register} name="text_domain" label="Text domain" defaultValue="online-generator" />
      <input type="hidden" name="function_name" value="your_prefix_register_meta_boxes" />
    </>
  )
}

const contextOptions = [
  {
    value: 'normal',
    label: 'After content',
  },
  {
    value: 'side',
    label: 'Side'
  },
  {
    value: 'form_top',
    label: 'Before post title'
  },
  {
    value: 'after_title',
    label: 'After post title'
  }
]

export default SettingsTab;
