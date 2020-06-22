import React from 'react';
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
      className={`og-item ${props.dragAndDrop && props.dragAndDrop.draggedTo === Number(props.index) && "dropArea"}`}>
      <div className="og-item__heading" onClick={() => props.handleShow(props.index + 1)}>
        {props.data?.general?.name}
        <span className="og-item__actions">
          <span className="og-item__type">{props.data?.general?.type}</span>
          <span className="og-item__action og-item__action--remove" title="Remove" onClick={() => props.removeItem(props.index)}>{trashIcon}</span>
          <span className="og-item__action og-item__action--duplicate" title="Duplicate" onClick={() => props.copyItem(props.data?.general?.type, props.index)} >{copyIcon}</span>
          <span className="og-item__action og-item__action--toggle" title="Toggle Settings">{props.isShow ? arrowUpIcon : arrowDownIcon}</span>
        </span>
      </div >
      <div className="og-item__body" style={{ display: props.isShow ? 'block' : 'none' }}>
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Advanced</Tab>
          </TabList>
          <TabPanel>
            <GeneralContent register={props.register} type={props.data?.general?.type} index={props.index} fieldData={props.data.general} />
          </TabPanel>
          <TabPanel>
            <AdvancedContent register={props.register} type={props.data?.general?.type} index={props.index} data={props.data.advanced} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default FieldSelected;
