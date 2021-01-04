import React, { memo } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { fieldsData } from '../../../../constants/constants';
import Content from './Content';

const FieldSelected = ( { id, field } ) => {
	let data = { ...fieldsData[ field.type ] };

	if ( [ 'divider', 'tab' ].includes( field.type ) ) {
		return <div className="og-item__body og-collapsible__body">
			<Content id={ id } data={ data.general } field={ field } />
		</div>;
	}

	return <Tabs forceRenderTabPanel={ true } className="og-item__body og-collapsible__body">
		<TabList>
			<Tab>General</Tab>
			<Tab>Advanced</Tab>
		</TabList>
		<TabPanel>
			<Content id={ id } data={ data.general } field={ field } />
		</TabPanel>
		<TabPanel>
			<Content id={ id } data={ data.advanced } field={ field } />
		</TabPanel>
	</Tabs>;
};

export default memo( FieldSelected );
