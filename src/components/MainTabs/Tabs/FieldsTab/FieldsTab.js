import React, {useState} from 'react';
import FieldMenu from './FieldMenu';
import FieldSelected from './FieldSelected';
import {fields} from '../../../../constants/constants';
import {getDataCopiedItem} from '../../../../utility/functions';
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
  const [isShow, setIsShow] = useState(0);
  const [searchParam, setSearchParam] = useState('');
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

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

  const onDragLeave = () => setDragAndDrop({...dragAndDrop, draggedTo: null});

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
    let data = {...fields[type]};
    if (data.general.id !== undefined ) {
      data.general.id = `${type}_${uniqid()}`;
    }
    setListSelected([...selectedList, {type, data}]);
    setIsShow(selectedList.length);
  }

  const removeItem = (index) => {
    let newList = selectedList;
    newList.splice(index, 1);
    setListSelected(newList);
  }

  const copyItem = (type, index) => {
    let item = {type};
    item.data = getDataCopiedItem(type, index);
    if (item.data.general.id !== undefined) {
      item.data.general.id += `_${uniqid()}`;
    }
    if (item.data.general.name !== undefined) {
      item.data.general.name += ' Copy';
    }
    let newList = selectedList;
    newList.splice(index + 1, 0, item);
    setListSelected(newList);
    setIsShow(index + 1);
  }

  const toggleItemSettings = index => setIsShow(index === isShow ? -1 : index)

  return (
    <div className="og-fields-wrapper">
      <div className="og-sidebar">
        <input type="search" className="og-search" placeholder="Enter field type here" onChange={e => setSearchParam(e.target.value)} />
        {searchParam ? <SearchResultList onSelectField={addItem} searchParam={searchParam} /> : <FieldMenu onSelectField={addItem} />}
      </div>

      <div className="og-main">
        <p>{
          selectedList.length > 0
            ? 'Drag and drop fields to reorder. Click the title bar to reveal field settings.'
            : 'No fields. Select fields on the left to add them to this field group.'
        }
        </p>
        {
          selectedList.map((item, index) =>
            <FieldSelected
              toggleItemSettings={toggleItemSettings}
              register={props.register}
              data={item.data}
              key={item.type + index}
              index={index}
              isShow={isShow === index}
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

const uniqid = () => Math.random().toString( 36 ).substr( 2 );

export default FieldsTab;
