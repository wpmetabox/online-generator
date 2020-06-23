import React from 'react';
import Input from '../../Common/Input';
import DivRow from '../../Common/DivRow';

const MetaBoxTab = ({register}) => {
  return (
    <>
      <Input register={register} name="id" label="ID" defaultValue="untitled" />
      <Input register={register} name="title" label="Title" defaultValue="Untitled" />
      <DivRow label="Priority" className="og-field--check">
        <label><input ref={register} type="radio" name="priority" value="default" defaultChecked /> Default</label>
        <label><input ref={register} type="radio" name="priority" value="high" /> High</label>
        <label><input ref={register} type="radio" name="priority" value="low" /> Low</label>
      </DivRow>
      <DivRow label="Context" htmlFor="context">
        <select ref={register} id="context" name="context" defaultValue="advanced" >
          {contextOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </DivRow>
      <DivRow label="Post Types" className="og-field--check">
        <label><input type="checkbox" ref={register} name="post_type" value="post" defaultChecked /> Post</label>
        <label><input type="checkbox" ref={register} name="post_type" value="page" /> Page</label>
      </DivRow>
      <DivRow label="Autosave" htmlFor="autosave">
        <input ref={register} id="autosave" name="autosave" type="checkbox" />
      </DivRow>
    </>
  )
}

const contextOptions = [
  {
    value: 'normal',
    label: 'Normal'
  },
  {
    value: 'advanced',
    label: 'Advanced'
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
  },
  {
    value: 'after_editor',
    label: 'After the post content editor'
  },
  {
    value: 'before_permalink',
    label: 'Before permalink'
  },
]

export default MetaBoxTab;
