import React, {useState} from 'react';
import { trashIcon, copyIcon, arrowDownIcon, arrowUpIcon } from '../../../../constants/icons';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralContent from './FieldContent/GeneralContent';
import AdvancedContent from './FieldContent/AdvancedContent';
import {ucfirst} from '../../../../utility/functions';

const FieldSelected = props => {
  const type = props.data.general.type;
  const index = props.index;
  const [label, setLabel] = useState(props.data?.general?.name);
  const [expanded, setExpanded] = useState(false);
  const toggleSettings = () => setExpanded(!expanded);

  if ('divider' === type) {
    return (
      <div
        data-position={index}
        draggable
        onDragStart={props.onDragStart}
        onDragOver={props.onDragOver}
        onDrop={props.onDrop}
        onDragLeave={props.onDragLeave}
        className={`og-item og-collapsible${expanded ? ' og-collapsible--expanded' : ''} ${props.dragAndDrop && props.dragAndDrop.draggedTo === Number(index) && "dropArea"}`}>
        <Header {...props} label={label} expanded={expanded} toggleSettings={toggleSettings} />
        <div className="og-item__body og-collapsible__body">
          <GeneralContent register={props.register} type={type} index={index} fieldData={props.data.general} />
        </div>
      </div>
    )
  }

  return (
    <div
      data-position={index}
      draggable
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      onDragLeave={props.onDragLeave}
      className={`og-item og-collapsible${expanded ? ' og-collapsible--expanded' : ''} ${props.dragAndDrop && props.dragAndDrop.draggedTo === Number(index) && "dropArea"}`}>
      <Header {...props} label={label} expanded={expanded} toggleSettings={toggleSettings} />
      <div className="og-item__body og-collapsible__body">
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Advanced</Tab>
          </TabList>
          <TabPanel>
            <GeneralContent register={props.register} type={type} index={index} fieldData={props.data.general} setLabel={setLabel} />
          </TabPanel>
          <TabPanel>
            <AdvancedContent register={props.register} type={type} index={index} data={props.data.advanced} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
const Header = props => {
  const type = props.data.general.type;
  const index = props.index;

  const duplicate = e => {
    e.stopPropagation();
    props.copyItem(type, index);
  }
  const remove = e => {
    e.stopPropagation();
    props.removeItem(index);
  }

  return (
    <div className="og-item__header og-collapsible__header" onClick={props.toggleSettings}>
      <input ref={props.register} type="hidden" name={`fields-${index}-type`} defaultValue={type} />
      <div className="og-item__title">{props.label || ucfirst(type)}</div>
      <div className="og-item__actions">
        <span className="og-item__type">{type}</span>
        <span className="og-item__action og-item__action--remove" title="Remove" onClick={remove}>{trashIcon}</span>
        <span className="og-item__action og-item__action--duplicate" title="Duplicate" onClick={duplicate}>{copyIcon}</span>
        <span className="og-item__action og-item__action--toggle" title="Toggle Settings">{props.expanded ? arrowUpIcon : arrowDownIcon}</span>
      </div>
    </div>
  )
}

export default FieldSelected;
