import React, { useState, useEffect } from 'react';
import './FieldsTab.scss'
import FieldMenu from './FieldMenu';
import FieldSelected from './FieldSelected';
import { fields } from '../../../../constants/constants';

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}

const FieldsTab = (props) => {
  const [selectedList, setListSelected] = useState([]);
  const [isShow, setIsShow] = useState('');
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  useEffect(() => {
    setIsShow(selectedList.length);
    return
  }, [selectedList]);

  const onSelect = (item) => {
    setIsShow(selectedList.length + 1);
    setListSelected(selectedList.concat(item));

  }

  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: selectedList
    });

    event.dataTransfer.setData("text/html", '');
  }

  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo
      })
    }
  }

  const onDrop = (event) => {
    setListSelected(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  }


  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null
    });
  }

  const handleShow = index => {
    index === isShow ? setIsShow(-isShow) : setIsShow(index)
  }

  console.log('ggg', isShow)

  return (
    <div className="fields_container" >
      <div className="left_fields">
        <input type="search" id="fields-search-input" className="search_input" placeholder="Enter field type here" />
        <FieldMenu onSelectField={onSelect} />
      </div>
      <div className="right_fields">
        <p className="title">{
          selectedList.length > 0
            ? 'Drag each item into the order you prefer. Click the arrow on the right of the item to reveal additional configuration options.'
            : 'Add meta box fields from the column on the left'
        }
        </p>
        {
          selectedList.map((item, index) =>
            <FieldSelected
              handleShow={handleShow}
              register={props.register}
              data={fields[item]}
              key={index}
              index={index}
              isShow={isShow === index + 1}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragLeave={onDragLeave}
              dragAndDrop={dragAndDrop}
              draggedTo={dragAndDrop.draggedTo}
            />
          )
        }
      </div>
    </div>
  )
}

export default FieldsTab;
