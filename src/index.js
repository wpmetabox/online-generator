import { render } from 'react-dom';
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

render( <App />, document.getElementById( 'root' ) );
