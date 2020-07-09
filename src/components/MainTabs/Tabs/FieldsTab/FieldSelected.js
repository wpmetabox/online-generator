import React from 'react';
import { trashIcon, copyIcon, arrowDownIcon, arrowUpIcon } from '../../../../constants/icons';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralContent from './FieldContent/GeneralContent';
import AdvancedContent from './FieldContent/AdvancedContent';
import {ucfirst} from '../../../../utility/functions';

const FieldSelected = props => {
  const type = props.data.general.type;
  return (
    <div
      data-position={props.index}
      draggable
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      onDragLeave={props.onDragLeave}
      className={`og-item og-collapsible${props.isShow ? ' og-collapsible--expanded' : ''} ${props.dragAndDrop && props.dragAndDrop.draggedTo === Number(props.index) && "dropArea"}`}>
      <input ref={props.register} type="hidden" name={`fields-${props.index}-type`} defaultValue={type} />
      <div className="og-item__header og-collapsible__header" onClick={() => props.handleShow(props.index + 1)}>
        <div className="og-item__title">{props.data?.general?.name || ucfirst(type)}</div>
        <div className="og-item__actions">
          <span className="og-item__type">{type}</span>
          <span className="og-item__action og-item__action--remove" title="Remove" onClick={() => props.removeItem(props.index)}>{trashIcon}</span>
          <span className="og-item__action og-item__action--duplicate" title="Duplicate" onClick={() => props.copyItem(type, props.index)} >{copyIcon}</span>
          <span className="og-item__action og-item__action--toggle" title="Toggle Settings">{props.isShow ? arrowUpIcon : arrowDownIcon}</span>
        </div>
      </div>
      <div className="og-item__body og-collapsible__body">
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
