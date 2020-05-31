import React from 'react';

const FieldItem = (props) => {
  return (
    <button type="button" className="btn_field" onClick={() => props.onSelectField(props.type)}>{props.title}</button>
  );
}

export default FieldItem;