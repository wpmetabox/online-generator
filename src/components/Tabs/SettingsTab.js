import Checkbox from '../Controls/Checkbox';
import DivRow from '../Controls/DivRow';
import Input from '../Controls/Input';

const SettingsTab = () => (
	<>
		<h3>Options</h3>
		<Input name="post_title" label="Field group title" defaultValue="Untitled Field Group" />
		<Input name="post_name" label="Field group ID" defaultValue="untitled" />
		<DivRow label="Post types" className="og-field--check">
			<label><input type="checkbox" name="settings[post_types][]" value="post" defaultChecked /> Post</label>
			<label><input type="checkbox" name="settings[post_types][]" value="page" /> Page</label>
		</DivRow>
		<DivRow label="Position" htmlFor="context">
			<select id="context" name="settings[context]" defaultValue="normal">
				<option value="normal">After content</option>
				<option value="side">Side</option>
				<option value="form_top">Before post title</option>
				<option value="after_title">After post title</option>
			</select>
		</DivRow>
		<DivRow label="Priority" className="og-field--check">
			<label><input type="radio" name="settings[priority]" value="high" defaultChecked /> High</label>
			<label><input type="radio" name="settings[priority]" value="low" /> Low</label>
		</DivRow>
		<Checkbox name="settings[autosave]" label="Autosave" />
		<h3>Advanced</h3>
		<Input name="prefix" label="Field ID prefix" defaultValue="" description="Prefix for all fields' ID. Leave empty to ignore or use _ to make fields hidden." tooltip="Auto add a prefix to all field IDs to keep them separated from other field groups or other plugins." />
		<Input name="text_domain" label="Text domain" defaultValue="online-generator" tooltip="Required for multilingual website. Used in the exported code only." />
	</>
);
export default SettingsTab;
