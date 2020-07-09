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
        <label><input type="checkbox" ref={register} name="post_types" value="post" defaultChecked /> Post</label>
        <label><input type="checkbox" ref={register} name="post_types" value="page" /> Page</label>
      </DivRow>
      <DivRow label="Position" htmlFor="context">
        <select ref={register} id="context" name="context" defaultValue="advanced">
          <option value="normal">After content</option>
          <option value="side">Side</option>
          <option value="form_top">Before post title</option>
          <option value="after_title">After post title</option>
        </select>
      </DivRow>
      <DivRow label="Priority" className="og-field--check">
        <label><input ref={register} type="radio" name="priority" value="high" defaultChecked /> High</label>
        <label><input ref={register} type="radio" name="priority" value="low" /> Low</label>
      </DivRow>
      <h3>Advanced</h3>
      <Input register={register} name="prefix" label="Field ID prefix" defaultValue="prefix-" description="Prefix for all fields' ID. Leave empty to ignore or use _ to make fields hidden." tooltip="Auto add a prefix to all field IDs to keep them separated from other field groups or other plugins." />
      <Input register={register} name="text_domain" label="Text domain" defaultValue="online-generator" tooltip="Required for multilingual website. Used in the exported code only." />
    </>
  )
}
export default SettingsTab;
