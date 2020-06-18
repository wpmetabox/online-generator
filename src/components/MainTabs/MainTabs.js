import React from 'react';
import './MainTab.scss';
import 'react-tabs/style/react-tabs.css';
import { useForm } from "react-hook-form";
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralTab from './Tabs/GeneralTab';
import MetaBoxTab from './Tabs/MetaBoxTab';
import FieldsTab from './Tabs/FieldsTab/FieldsTab';
import { mainTabs } from '../../constants/constants';
import { actions } from '../../context/GeneratorContext';

export const MainTabs = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    actions.generatePHPCode(data)
  }

  return (
    <div className="main_tab">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            {
              mainTabs.map((item, index) =>
                <Tab key={index}>
                  {item.icon}
                  <span>{item.label}</span>
                </Tab>
              )
            }
          </TabList>
          <TabPanel>
            <GeneralTab register={register} />
          </TabPanel>
          <TabPanel>
            <MetaBoxTab register={register} />
          </TabPanel>
          <TabPanel>
            <FieldsTab register={register} />
          </TabPanel>
        </Tabs>
        <button type="submit">Generate Code</button>
      </form>
    </div>
  );
}

export default MainTabs;