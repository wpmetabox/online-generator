import React, { useState } from 'react';
import { trashIcon, copyIcon, arrowDownIcon, arrowUpIcon } from '../../../../contants/icons';
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralContent from './FieldContent/GeneralContent';
import AdvancedContent from './FieldContent/AdvancedContent';

const FieldSelected = (props) => {
  const [isShow, setIsShow] = useState(true);
  
  return (
    <div
      data-position={props.index}
      draggable
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      onDragLeave={props.onDragLeave}
      className={`field_selected ${props.dragAndDrop && props.dragAndDrop.draggedTo === Number(props.index) && "dropArea"}`}>
      <div className="og-builder__field-heading" onClick={() => setIsShow(!isShow)}>
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
              isShow ? arrowUpIcon : arrowDownIcon
            }
          </span>
        </span>
      </div >
      {
        isShow && <div className="og-builder__field-body">
          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>Advanced</Tab>
            </TabList>
            <TabPanel>
              <GeneralContent />
            </TabPanel>
            <TabPanel>
              <AdvancedContent />
            </TabPanel>
          </Tabs>
        </div>
      }
    </div>
  )
}

export default FieldSelected;
