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
  const onSubmit = data => actions.generatePHPCode(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            {mainTabs.map((item, index) => <Tab key={index}>{item.icon} {item.label}</Tab>)}
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
    </>
  );
}

export default MainTabs;