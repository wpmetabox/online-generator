import React from 'react';
import Input from '../../Common/Input';
import DivRow from '../DivRow';

const MetaBoxTab = (props) => {
  return (
    <div>
      <Input ref={props.register} data={{ placeholder: "Enter ID here", name: "id_meta_box", label: "ID", defaultValue: "untitled" }} />
      <Input ref={props.register} data={{ placeholder: "Enter title here", name: "title_meta_box", label: "Title", defaultValue: "Untitled Metabox" }} />
      <DivRow label="Priority" >
        <div className="radio-group">
          <label><input ref={props.register} type="radio" name="priority" value="default" defaultChecked />Default</label>
          <label><input ref={props.register} type="radio" name="priority" value="high" /> High</label>
          <label><input ref={props.register} type="radio" name="priority" value="low" /> Low</label>
        </div>
      </DivRow>
      <DivRow label="Context" >
        <select ref={props.register} id="meta-box-context" name="context" defaultValue="advanced" >
          {
            contextOptions.map(item => <option key={item.id} value={item.value}>{item.title}</option>)
          }
        </select>
      </DivRow>
      <DivRow label="Post types" >
        <div className="checkbox-group">
          <label className="check_box_post">
            <input type="checkbox" ref={props.register} name="post-type" value="post" defaultChecked /> post
          </label>
          <label className="check_box_page">
            <input type="checkbox" ref={props.register} name="post-type" value="page" /> page
          </label>
        </div>
      </DivRow>
      <DivRow label="Autosave" >
        <input ref={props.register} name="autosave" type="checkbox" />
      </DivRow>
    </div>
  )
}

const contextOptions = [
  {
    id: 1,
    value: 'normal',
    title: 'Normal'
  },
  {
    id: 2,
    value: 'advanced',
    title: 'Advanced'
  },
  {
    id: 3,
    value: 'side',
    title: 'Side'
  },
  {
    id: 4,
    value: 'form_top',
    title: 'Before post title'
  },
  {
    id: 5,
    value: 'after_title',
    title: 'After post title'
  },
  {
    id: 6,
    value: 'after_editor',
    title: 'After the post content editor'
  },
  {
    id: 7,
    value: 'before_permalink',
    title: 'Before permalink'
  },
]

export default MetaBoxTab;
