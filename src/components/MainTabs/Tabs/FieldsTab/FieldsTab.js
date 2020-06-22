import React, { useState, useEffect } from 'react';
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
  const [isShow, setIsShow] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  useEffect(() => {
    setIsShow(selectedList.length);
    return
  }, [selectedList.length]);

  const onSelect = (item) => {
    let dataItem = {...fields[item]}
    dataItem.general = { ...fields[item].general, id: `${item}-${selectedList.length + 1}` }
    setListSelected([...selectedList, { type: item, data: dataItem }]);
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

  const removeItem = (index) => {
    let newList = selectedList;
    newList.splice(index, 1)
    setListSelected(newList);
  }

  const copyItem = (type, index) => {
    const sameTypeItems = selectedList.filter(item => item.type === type)
    let item = { type }
    item.data = getDataCopiedItem(type, index);
    item.data.general.id = item.data.general.id + `_copy_${sameTypeItems.length}`
    setListSelected([...selectedList, item])
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

  return (
    <div className="og-fields-wrapper">
      <div className="og-sidebar">
        <input type="search" className="og-search" placeholder="Enter field type here" onChange={e => setSearchParam(e.target.value)} />
        {searchParam ? <SearchResultList onSelectField={onSelect} searchParam={searchParam} /> : <FieldMenu onSelectField={onSelect} />}
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
              handleShow={handleShow}
              register={props.register}
              data={item.data}
              key={item.type + index}
              index={index}
              isShow={isShow === index + 1}
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

export default FieldsTab;
