import React, { useState } from 'react';
import { trashIcon, copyIcon, arrowDownIcon, arrowUpIcon } from '../../../../constants/icons';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralContent from './FieldContent/GeneralContent';
import AdvancedContent from './FieldContent/AdvancedContent';

const FieldSelected = (props) => {
  console.log('1111', props)
  return (
    <div
      data-position={props.index}
      draggable
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      onDragLeave={props.onDragLeave}
      className={`field_selected ${props.dragAndDrop && props.dragAndDrop.draggedTo === Number(props.index) && "dropArea"}`}>
      <div className="og-builder__field-heading" onClick={() => props.handleShow(props.index + 1)}>
        <span >{props.data?.name}</span>
        <span className="actions">
          <span className="type">{props.data?.type}</span>
          <span className="item-remove" title="Remove">
            {
              trashIcon
            }
          </span>
          <span className="item-copy" title="Remove">
            {
              copyIcon
            }
          </span>
          <span className="item-arrow" title="Remove">
            {
              props.isShow ? arrowUpIcon : arrowDownIcon
            }
          </span>
        </span>
      </div >
      <div className="og-builder__field-body" style={{ display: props.isShow ? 'block' : 'none' }}>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Advanced</Tab>
          </TabList>
          <TabPanel>
            <GeneralContent register={props.register} type={props.data?.type} index={props.index} />
          </TabPanel>
          <TabPanel>
            <AdvancedContent />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default FieldSelected;
