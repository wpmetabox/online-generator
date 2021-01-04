import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { fieldIcon, settingIcon } from '../../constants/icons';
import FieldsTab from './Tabs/FieldsTab/FieldsTab';
import SettingsTab from './Tabs/SettingsTab';

export const MainTabs = () => {
	const [ loading, setLoading ] = useState( false );

	const onSubmit = data => {
		setLoading( true );
	};

	useEffect( () => {
		setLoading( false );
	}, [] );

	return (
		<form id="og-form">
			<Tabs forceRenderTabPanel={ true }>
				<TabList>
					<Tab>{ fieldIcon } Fields</Tab>
					<Tab>{ settingIcon } Settings</Tab>
				</TabList>
				<TabPanel>
					<FieldsTab />
				</TabPanel>
				<TabPanel>
					<SettingsTab />
				</TabPanel>
			</Tabs>
			<button type="submit" disabled={ loading }>Generate Code</button> {loading && <span className="og-loading">Generating code. Please wait...</span> }
		</form>
	);
};

export default MainTabs;