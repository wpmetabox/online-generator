import React from 'react';
import DivRow from '../DivRow';

const PostType = ({name, ...rest}) => (
  <DivRow {...rest} htmlFor={name} label="Post type">
    <select id={name} name={name} multiple>
      <option value="post">Post</option>
      <option value="page">Page</option>
    </select>
  </DivRow>
)
export default PostType;