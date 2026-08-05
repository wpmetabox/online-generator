import { createRoot } from 'react-dom/client';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Result from './components/Result';
import FieldsTab from './components/Tabs/FieldsTab';
import SettingsTab from './components/Tabs/SettingsTab';
import { fieldIcon, settingIcon } from './constants/icons';

const App = () => (
	<form className="og" id="og-form" onSubmit={ e => e.preventDefault() }>
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
		<Result />
		{/* <FieldsData /> */ }
	</form>
);

const container = document.getElementById( 'root' );
const root = createRoot( container );
root.render( <App /> );
