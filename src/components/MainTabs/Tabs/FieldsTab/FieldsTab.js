import React, { useState } from 'react';
import FieldMenu from './FieldMenu';
import FieldSelected from './FieldSelected';
import { fields } from '../../../../constants/constants';
import { getDataCopiedItem } from '../../../../utility/functions';
import SearchResultList from './SearchResultList';

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}

const FieldsTab = (props) => {
  const [selectedList, setListSelected] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  const onDragStart = (event) => {
    const list = [...selectedList]
    const id = event.currentTarget.dataset.position
    const initialPosition = list.map(item => item.data.general.id).indexOf(id);

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
    const list = [...selectedList]
    const id = event.currentTarget.dataset.position
    const draggedTo = list.map(item => item.data.general.id).indexOf(id);
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

  const onDragLeave = () => setDragAndDrop({ ...dragAndDrop, draggedTo: null });

  const onDrop = () => {
    setListSelected(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  }

  const addItem = type => {
    const data = { ...fields[type], general: { ...fields[type].general, id: `${type}_${uniqid()}` } };
    setListSelected([...selectedList, { type, data }]);
  }

  const removeItem = (id) => {
    let newList = [...selectedList];
    const index = newList.map(item => item.data.general.id).indexOf(id);
    newList.splice(index, 1);
    setListSelected(newList);
  }

  const copyItem = (type, id) => {
    let item = { type };
    item.data = getDataCopiedItem(type, id);
    if (item.data.general.id !== undefined) {
      item.data.general.id += `_${uniqid()}`;
    }
    if (item.data.general.name !== undefined) {
      item.data.general.name += ' Copy';
    }
    let newList = [...selectedList];
    const index = newList.map(item => item.data.general.id).indexOf(id);
    newList.splice(index + 1, 0, item);
    setListSelected(newList);
  }
  console.log('sss', selectedList)

  return (
    <div className="og-fields-wrapper">
      <div className="og-sidebar">
        <input type="search" className="og-search" placeholder="Enter field type here" onChange={e => setSearchParam(e.target.value)} />
        {searchParam ? <SearchResultList onSelectField={addItem} searchParam={searchParam} /> : <FieldMenu onSelectField={addItem} />}
      </div>

      <div className="og-main">
        <p>
          {
            selectedList.length > 0
              ? 'Drag and drop fields to reorder. Click the title bar to reveal field settings.'
              : 'No fields. Select fields on the left to add them to this field group.'
          }
        </p>
        {
          selectedList.map((item) =>
            <FieldSelected
              register={props.register}
              data={item.data}
              key={item.data.general.id}
              index={item.data.general.id}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragLeave={onDragLeave}
              dragAndDrop={dragAndDrop}
              draggedTo={dragAndDrop.draggedTo}
              removeItem={removeItem}
              copyItem={copyItem}
            />
          )
        }
      </div>
    </div>
  )
}

const uniqid = () => Math.random().toString(36).substr(2);

export default FieldsTab;
