import React from 'react';
import Checkbox from '../Controls/Checkbox';
import DivRow from '../Controls/DivRow';
import Input from '../Controls/Input';

const SettingsTab = () => (
	<>
		<h3>Options</h3>
		<Input name="title" label="Meta box title" defaultValue="Untitled" />
		<Input name="id" label="Meta box ID" defaultValue="untitled" />
		<DivRow label="Post types" className="og-field--check">
			<label><input type="checkbox" name="post_types[]" value="post" defaultChecked /> Post</label>
			<label><input type="checkbox" name="post_types[]" value="page" /> Page</label>
		</DivRow>
		<DivRow label="Position" htmlFor="context">
			<select id="context" name="context" defaultValue="normal">
				<option value="normal">After content</option>
				<option value="side">Side</option>
				<option value="form_top">Before post title</option>
				<option value="after_title">After post title</option>
			</select>
		</DivRow>
		<DivRow label="Priority" className="og-field--check">
			<label><input type="radio" name="priority" value="high" defaultChecked /> High</label>
			<label><input type="radio" name="priority" value="low" /> Low</label>
		</DivRow>
		<Checkbox name="autosave" label="Autosave" />
		<h3>Advanced</h3>
		<Input name="prefix" label="Field ID prefix" defaultValue="prefix-" description="Prefix for all fields' ID. Leave empty to ignore or use _ to make fields hidden." tooltip="Auto add a prefix to all field IDs to keep them separated from other field groups or other plugins." />
		<Input name="text_domain" label="Text domain" defaultValue="online-generator" tooltip="Required for multilingual website. Used in the exported code only." />
	</>
);
export default SettingsTab;
