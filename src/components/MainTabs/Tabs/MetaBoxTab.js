import React from 'react';
import Input from '../../Common/Input';
import DivRow from '../DivRow';

const MetaBoxTab = (props) => {
  return (
    <div>
      <Input ref={props.register} data={{ placeholder: "Enter ID here", name: "id_meta_box", label: "ID", defaultValue: "untitled" }} />
      <Input ref={props.register} data={{ placeholder: "Enter title here", name: "title_meta_box", label: "Title", defaultValue: "Untitled Metabox" }} />
      <DivRow label="Priority" className="og-field--check">
          <label><input ref={props.register} type="radio" name="priority" value="default" defaultChecked /> Default</label>
          <label><input ref={props.register} type="radio" name="priority" value="high" /> High</label>
          <label><input ref={props.register} type="radio" name="priority" value="low" /> Low</label>
      </DivRow>
      <DivRow label="Context" htmlFor="context">
        <select ref={props.register} id="context" name="context" defaultValue="advanced" >
          {contextOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </DivRow>
      <DivRow label="Post Types" className="og-field--check">
          <label>
            <input type="checkbox" ref={props.register} name="post-type" value="post" defaultChecked /> Post
          </label>
          <label>
            <input type="checkbox" ref={props.register} name="post-type" value="page" /> Page
          </label>
      </DivRow>
      <DivRow label="Autosave" htmlFor="autosave">
        <input ref={props.register} id="autosave" name="autosave" type="checkbox" />
      </DivRow>
    </div>
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
