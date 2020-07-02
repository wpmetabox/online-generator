import React, { useState, useEffect, useContext } from 'react';
import 'react-tabs/style/react-tabs.css';
import { useForm } from "react-hook-form";
import { TabPanel, Tabs, TabList, Tab } from 'react-tabs';
import GeneralTab from './Tabs/GeneralTab';
import MetaBoxTab from './Tabs/MetaBoxTab';
import FieldsTab from './Tabs/FieldsTab/FieldsTab';
import { mainTabs } from '../../constants/constants';
import { actions, Context } from '../../context/GeneratorContext';

export const MainTabs = () => {
  const { handleSubmit, register } = useForm();

  const state = useContext(Context);
  const [loading, setLoading] = useState(false);

  const onSubmit = data => {
    setLoading(true);
    actions.generatePHPCode(data)
  }

  useEffect(() => setLoading(false), [state.state.responseTime])

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
        <button type="submit" disabled={loading}>Generate Code</button> {loading && <span className="og-loading">Generating code. Please wait...</span>}
      </form>
    </>
  );
}

export default MainTabs;