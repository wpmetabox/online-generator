import React, { useState } from 'react';
import { trashIcon, copyIcon, arrowDownIcon, arrowUpIcon } from '../../../../constants/icons';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralContent from './FieldContent/GeneralContent';
import AdvancedContent from './FieldContent/AdvancedContent';

const FieldSelected = (props) => {
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
          <span className="item-remove" title="Remove" onClick={() => props.removeItem(props.index)}>
            {
              trashIcon
            }
          </span>
          <span className="item-copy" title="copy" onClick={() => props.copyItem(props.data?.type, props.name.includes('copy') ? props.name : `${props.name}_${props.index + 1}`)} >
            {
              copyIcon
            }
          </span>
          <span className="item-arrow" title="arrow">
            {
              props.isShow ? arrowUpIcon : arrowDownIcon
            }
          </span>
        </span>
      </div >
      <div className="og-builder__field-body" style={{ display: props.isShow ? 'block' : 'none' }}>
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Advanced</Tab>
          </TabList>
          <TabPanel>
            <GeneralContent register={props.register} type={props.data?.type} name={props?.name} index={props.index} generalData={props.data.general} />
          </TabPanel>
          <TabPanel>
            <AdvancedContent register={props.register} type={props.data?.type} name={props?.name} index={props.index} defaultValue={props.data.advanced} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default FieldSelected;
