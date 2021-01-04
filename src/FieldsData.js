/**
 * Used to strip un-supported field types and field settings from Meta Box Builder
 */

import dotProp from 'dot-prop';

// Get full fieldsData from Meta Box Builder /mbb/fields/ REST API.
let fieldsData = {
	autocomplete: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Choices',
					tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	background: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	button: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Button text'
				},
				'default': ''
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	button_group: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Buttons',
					tooltip: 'Enter each button text on a line. For more control, you may specify both value and label like \'bold: B\' (without quotes)'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Display buttons horizontally'
				},
				'default': true
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	checkbox: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Checkbox',
				props: {
					label: 'Checked by default'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	checkbox_list: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Choices',
					tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
				},
				'default': ''
			},
			std: {
				control: 'Textarea',
				props: {
					label: 'Default value',
					tooltip: 'Enter each value on a line'
				},
				'default': ''
			},
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Inline',
					tooltip: 'Display choices on a single line'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	color: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			alpha_channel: {
				control: 'Checkbox',
				props: {
					label: 'Allow to select opacity'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://automattic.github.io/Iris/',
					label: 'Custom color picker options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	custom_html: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Textarea',
				props: {
					label: 'Content (HTML allowed)'
				},
				'default': ''
			},
			callback: {
				control: 'Input',
				props: {
					label: 'PHP Callback',
					tooltip: 'PHP function that is called to show custom HTML content. Will overwrite the content setting above.'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	date: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			save_format: {
				control: 'Input',
				props: {
					label: 'Save format',
					tooltip: 'Custom format for the value saved in the database. Accepts same formats as the PHP date() function. Leave empty to save as it is.'
				},
				'default': ''
			},
			timestamp: {
				control: 'Checkbox',
				props: {
					label: 'Save value as timestamp'
				},
				'default': false
			},
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Inline',
					tooltip: 'Display the date picker inline with the input. Do not require to click the input field to trigger the date picker.'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://api.jqueryui.com/datepicker/',
					label: 'Date picker options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	datetime: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			save_format: {
				control: 'Input',
				props: {
					label: 'Save format',
					tooltip: 'Custom format for the value saved in the database. Accepts same formats as the PHP date() function. Leave empty to save as it is.'
				},
				'default': ''
			},
			timestamp: {
				control: 'Checkbox',
				props: {
					label: 'Save value as timestamp'
				},
				'default': false
			},
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Inline',
					tooltip: 'Display the date picker inline with the input. Do not require to click the input field to trigger the date picker.'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://api.jqueryui.com/datepicker/',
					label: 'Date picker options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	divider: {
		general: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	email: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	fieldset_text: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'KeyValue',
				props: {
					label: 'Inputs',
					valuePlaceholder: 'Enter label'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	file: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			upload_dir: {
				control: 'Input',
				props: {
					label: 'Custom upload folder',
					tooltip: 'Relatively to the WordPress root path'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	file_advanced: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			mime_type: {
				control: 'Input',
				props: {
					label: 'MIME types',
					tooltip: 'Filters items in the Media Library popup. Does not restrict file types when upload. Separate by commas.'
				},
				'default': ''
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			max_status: {
				control: 'Checkbox',
				props: {
					label: 'Show status',
					tooltip: 'Display how many files uploaded/remaining'
				},
				'default': true
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	file_input: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	file_upload: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			mime_type: {
				control: 'Input',
				props: {
					label: 'MIME types',
					tooltip: 'Filters items in the Media Library popup. Does not restrict file types when upload. Separate by commas.'
				},
				'default': ''
			},
			max_file_size: {
				control: 'Input',
				props: {
					label: 'Max file size',
					tooltip: 'Supports b, kb, mb, gb, tb suffixes. e.g. "10mb" or "1gb".'
				},
				'default': ''
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			max_status: {
				control: 'Checkbox',
				props: {
					label: 'Show status',
					tooltip: 'Display how many files uploaded/remaining'
				},
				'default': true
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	map: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			api_key: {
				control: 'Input',
				props: {
					label: '<a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopenner noreferrer">Google Maps API key</a>',
					tooltip: 'The ID of address field. For multiple fields, separate them by comma.',
					required: true
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default location',
					tooltip: 'Format: latitude,longitude.'
				},
				'default': ''
			},
			address_field: {
				control: 'AddressField',
				props: {
					label: 'Address field',
					tooltip: 'The ID of address field. For multiple fields, separate them by comma.',
					placeholder: 'Enter or select a field ID',
					required: true
				},
				'default': null
			},
			language: {
				control: 'Select',
				props: {
					label: 'Language',
					options: {
						ar: 'Arabic',
						bg: 'Bulgarian',
						bn: 'Bengali',
						ca: 'Catalan',
						cs: 'Czech',
						da: 'Danish',
						de: 'German',
						el: 'Greek',
						en: 'English',
						'en-AU': 'English (Australian)',
						'en-GB': 'English (Great Britain)',
						es: 'Spanish',
						eu: 'Basque',
						fa: 'Farsi',
						fi: 'Finnish',
						fil: 'Filipino',
						fr: 'French',
						gl: 'Galician',
						gu: 'Gujarati',
						hi: 'Hindi',
						hr: 'Croatian',
						hu: 'Hungarian',
						id: 'Indonesian',
						it: 'Italian',
						iw: 'Hebrew',
						ja: 'Japanese',
						kn: 'Kannada',
						ko: 'Korean',
						lt: 'Lithuanian',
						lv: 'Latvian',
						ml: 'Malayalam',
						mr: 'Marathi',
						nl: 'Dutch',
						no: 'Norwegian',
						pl: 'Polish',
						pt: 'Portuguese',
						'pt-BR': 'Portuguese (Brazil)',
						'pt-PT': 'Portuguese (Portugal)',
						ro: 'Romanian',
						ru: 'Russian',
						sk: 'Slovak',
						sl: 'Slovenian',
						sr: 'Serbian',
						sv: 'Swedish',
						ta: 'Tamil',
						te: 'Telugu',
						th: 'Thai',
						tl: 'Tagalog',
						tr: 'Turkish',
						uk: 'Ukrainian',
						vi: 'Vietnamese',
						'zh-CN': 'Chinese (Simplified)',
						'zh-TW': 'Chinese (Traditional)'
					}
				},
				'default': ''
			},
			region: {
				control: 'Input',
				props: {
					label: '<a href="https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains" target="_blank" rel="noopenner noreferrer">Region code</a>',
					tooltip: 'The region code, specified as a country code top-level domain. Use for autocompleting addresses.'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	heading: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Description'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	hidden: {
		general: {
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	image: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			upload_dir: {
				control: 'Input',
				props: {
					label: 'Custom upload folder',
					tooltip: 'Relatively to the WordPress root path'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	image_advanced: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			max_status: {
				control: 'Checkbox',
				props: {
					label: 'Show status',
					tooltip: 'Display how many files uploaded/remaining'
				},
				'default': true
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			image_size: {
				control: 'Select',
				props: {
					label: 'Image size',
					tooltip: 'Image size that displays in the edit page, used to make sure images are not blurry. It\'s not meant to display images with the exact width and height.',
					options: {
						thumbnail: 'Thumbnail',
						medium: 'Medium',
						medium_large: 'Medium Large',
						large: 'Large',
						'1536x1536': '1536x1536',
						'2048x2048': '2048x2048',
						'post-thumbnail': 'Post Thumbnail'
					}
				},
				'default': 'thumbnail'
			},
			add_to: {
				control: 'Select',
				props: {
					label: 'New image placement',
					options: {
						beginning: 'Beginning of the list',
						end: 'End of the list'
					}
				},
				'default': 'end'
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	image_select: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Choices',
					tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	image_upload: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			max_file_size: {
				control: 'Input',
				props: {
					label: 'Max file size',
					tooltip: 'Supports b, kb, mb, gb, tb suffixes. e.g. "10mb" or "1gb".'
				},
				'default': ''
			},
			image_size: {
				control: 'Select',
				props: {
					label: 'Image size',
					tooltip: 'Image size that displays in the edit page, used to make sure images are not blurry. It\'s not meant to display images with the exact width and height.',
					options: {
						thumbnail: 'Thumbnail',
						medium: 'Medium',
						medium_large: 'Medium Large',
						large: 'Large',
						'1536x1536': '1536x1536',
						'2048x2048': '2048x2048',
						'post-thumbnail': 'Post Thumbnail'
					}
				},
				'default': 'thumbnail'
			},
			add_to: {
				control: 'Select',
				props: {
					label: 'New image placement',
					options: {
						beginning: 'Beginning of the list',
						end: 'End of the list'
					}
				},
				'default': 'end'
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			max_status: {
				control: 'Checkbox',
				props: {
					label: 'Show status',
					tooltip: 'Display how many files uploaded/remaining'
				},
				'default': true
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	key_value: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			placeholder_key: {
				control: 'Input',
				props: {
					label: 'Placeholder for key'
				},
				'default': ''
			},
			placeholder_value: {
				control: 'Input',
				props: {
					label: 'Placeholder for value'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	number: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			min: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Min value'
				},
				'default': ''
			},
			max: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max value'
				},
				'default': ''
			},
			step: {
				control: 'Input',
				props: {
					label: 'Step',
					tooltip: 'Set the increments at which a numeric value can be set. Enter \'any\' to accept any number.'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	oembed: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			not_available_string: {
				control: 'Input',
				props: {
					label: 'Not available text',
					tooltip: 'The text message displayed to users when the embed media is not available. Accepts HTML.'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	osm: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default location',
					tooltip: 'Format: latitude,longitude.'
				},
				'default': ''
			},
			address_field: {
				control: 'AddressField',
				props: {
					label: 'Address field',
					tooltip: 'The ID of address field. For multiple fields, separate them by comma.',
					placeholder: 'Enter or select a field ID',
					required: true
				},
				'default': null
			},
			language: {
				control: 'Select',
				props: {
					label: 'Language',
					options: {
						ar: 'Arabic',
						bg: 'Bulgarian',
						bn: 'Bengali',
						ca: 'Catalan',
						cs: 'Czech',
						da: 'Danish',
						de: 'German',
						el: 'Greek',
						en: 'English',
						'en-AU': 'English (Australian)',
						'en-GB': 'English (Great Britain)',
						es: 'Spanish',
						eu: 'Basque',
						fa: 'Farsi',
						fi: 'Finnish',
						fil: 'Filipino',
						fr: 'French',
						gl: 'Galician',
						gu: 'Gujarati',
						hi: 'Hindi',
						hr: 'Croatian',
						hu: 'Hungarian',
						id: 'Indonesian',
						it: 'Italian',
						iw: 'Hebrew',
						ja: 'Japanese',
						kn: 'Kannada',
						ko: 'Korean',
						lt: 'Lithuanian',
						lv: 'Latvian',
						ml: 'Malayalam',
						mr: 'Marathi',
						nl: 'Dutch',
						no: 'Norwegian',
						pl: 'Polish',
						pt: 'Portuguese',
						'pt-BR': 'Portuguese (Brazil)',
						'pt-PT': 'Portuguese (Portugal)',
						ro: 'Romanian',
						ru: 'Russian',
						sk: 'Slovak',
						sl: 'Slovenian',
						sr: 'Serbian',
						sv: 'Swedish',
						ta: 'Tamil',
						te: 'Telugu',
						th: 'Thai',
						tl: 'Tagalog',
						tr: 'Turkish',
						uk: 'Ukrainian',
						vi: 'Vietnamese',
						'zh-CN': 'Chinese (Simplified)',
						'zh-TW': 'Chinese (Traditional)'
					}
				},
				'default': ''
			},
			region: {
				control: 'Input',
				props: {
					label: '<a href="https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains" target="_blank" rel="noopenner noreferrer">Region code</a>',
					tooltip: 'The region code, specified as a country code top-level domain. Use for autocompleting addresses.'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	password: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	post: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			post_type: {
				control: 'ReactSelect',
				props: {
					label: 'Post types',
					options: {
						post: 'Post (post)',
						page: 'Page (page)',
						attachment: 'Media (attachment)'
					}
				},
				'default': [
					'post'
				]
			},
			field_type: {
				control: 'Select',
				props: {
					label: 'Field type',
					options: {
						select: 'Select',
						select_advanced: 'Select advanced',
						select_tree: 'Select tree',
						checkbox_list: 'Checkbox list',
						checkbox_tree: 'Checkbox tree',
						radio_list: 'Radio list'
					}
				},
				'default': 'select_advanced'
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			parent: {
				control: 'Checkbox',
				props: {
					label: 'Set as parent',
					tooltip: 'Set the selected post as the parent for the current being edited post.'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/classes/wp_query/',
					label: 'Query args',
					tooltip: 'Query arguments for getting posts. Same as in the WP_Query class.'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	radio: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Choices',
					tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Inline',
					tooltip: 'Display choices on a single line'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	range: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			min: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Min value'
				},
				'default': ''
			},
			max: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max value'
				},
				'default': ''
			},
			step: {
				control: 'Input',
				props: {
					label: 'Step',
					tooltip: 'Set the increments at which a numeric value can be set. Enter \'any\' to accept any number.'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	select: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Choices',
					tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	select_advanced: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'Textarea',
				props: {
					label: 'Choices',
					tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://select2.org/configuration',
					label: 'Select2 options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	sidebar: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			field_type: {
				control: 'Select',
				props: {
					label: 'Field type',
					options: {
						select: 'Select',
						select_advanced: 'Select advanced',
						select_tree: 'Select tree',
						checkbox_list: 'Checkbox list',
						checkbox_tree: 'Checkbox tree',
						radio_list: 'Radio list'
					}
				},
				'default': 'select_advanced'
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	single_image: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			image_size: {
				control: 'Select',
				props: {
					label: 'Image size',
					tooltip: 'Image size that displays in the edit page, used to make sure images are not blurry. It\'s not meant to display images with the exact width and height.',
					options: {
						thumbnail: 'Thumbnail',
						medium: 'Medium',
						medium_large: 'Medium Large',
						large: 'Large',
						'1536x1536': '1536x1536',
						'2048x2048': '2048x2048',
						'post-thumbnail': 'Post Thumbnail'
					}
				},
				'default': 'thumbnail'
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	slider: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			prefix: {
				control: 'Input',
				props: {
					label: 'Prefix',
					tooltip: 'Text displayed before the field value'
				},
				'default': ''
			},
			suffix: {
				control: 'Input',
				props: {
					label: 'Suffix',
					tooltip: 'Text displayed after the field value'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://api.jqueryui.com/slider',
					label: 'jQueryUI slider options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	'switch': {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			style: {
				control: 'Select',
				props: {
					label: 'Style',
					options: {
						rounded: 'Rounded',
						square: 'Square'
					}
				},
				'default': 'rounded'
			},
			on_label: {
				control: 'Input',
				props: {
					label: 'Custom ON status label'
				},
				'default': ''
			},
			off_label: {
				control: 'Input',
				props: {
					label: 'Custom OFF status label'
				},
				'default': ''
			},
			std: {
				control: 'Checkbox',
				props: {
					label: 'ON by default'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	taxonomy: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			taxonomy: {
				control: 'ReactSelect',
				props: {
					label: 'Taxonomies',
					options: {
						category: 'Category (category)',
						post_tag: 'Tag (post_tag)'
					}
				},
				'default': []
			},
			field_type: {
				control: 'Select',
				props: {
					label: 'Field type',
					options: {
						select: 'Select',
						select_advanced: 'Select advanced',
						select_tree: 'Select tree',
						checkbox_list: 'Checkbox list',
						checkbox_tree: 'Checkbox tree',
						radio_list: 'Radio list'
					}
				},
				'default': 'select_advanced'
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			add_new: {
				control: 'Checkbox',
				props: {
					label: 'Add new',
					tooltip: 'Allow users to create a new term when submitting the post'
				},
				'default': false
			},
			remove_default: {
				control: 'Checkbox',
				props: {
					label: 'Remove default meta box'
				},
				'default': false
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/functions/get_terms/',
					label: 'Query args',
					tooltip: 'Query arguments for getting terms. Same as in the get_terms() function.'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	taxonomy_advanced: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			taxonomy: {
				control: 'ReactSelect',
				props: {
					label: 'Taxonomies',
					options: {
						category: 'Category (category)',
						post_tag: 'Tag (post_tag)'
					}
				},
				'default': []
			},
			field_type: {
				control: 'Select',
				props: {
					label: 'Field type',
					options: {
						select: 'Select',
						select_advanced: 'Select advanced',
						select_tree: 'Select tree',
						checkbox_list: 'Checkbox list',
						checkbox_tree: 'Checkbox tree',
						radio_list: 'Radio list'
					}
				},
				'default': 'select_advanced'
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			add_new: {
				control: 'Checkbox',
				props: {
					label: 'Add new',
					tooltip: 'Allow users to create a new term when submitting the post'
				},
				'default': false
			},
			remove_default: {
				control: 'Checkbox',
				props: {
					label: 'Remove default meta box'
				},
				'default': false
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/functions/get_terms/',
					label: 'Query args',
					tooltip: 'Query arguments for getting terms. Same as in the get_terms() function.'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	text: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			prepend: {
				control: 'Input',
				props: {
					label: 'Prepend text'
				},
				'default': ''
			},
			append: {
				control: 'Input',
				props: {
					label: 'Append text'
				},
				'default': ''
			},
			datalist_choices: {
				control: 'Textarea',
				props: {
					label: 'Predefined values',
					tooltip: 'Known as "datalist", these are values that users can select from (they still can enter text if they want). Enter each value on a line.'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	text_list: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			options: {
				control: 'KeyValue',
				props: {
					label: 'Inputs',
					keyPlaceholder: 'Placeholder',
					valuePlaceholder: 'Label'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	textarea: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			rows: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Rows'
				},
				'default': ''
			},
			cols: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Columns'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	time: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Inline',
					tooltip: 'Display the time picker inline with the input. Do not require to click the input field to trigger the time picker.'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'http://trentrichardson.com/examples/timepicker',
					label: 'Time picker options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	user: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			field_type: {
				control: 'Select',
				props: {
					label: 'Field type',
					options: {
						select: 'Select',
						select_advanced: 'Select advanced',
						select_tree: 'Select tree',
						checkbox_list: 'Checkbox list',
						checkbox_tree: 'Checkbox tree',
						radio_list: 'Radio list'
					}
				},
				'default': 'select_advanced'
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			select_all_none: {
				control: 'Checkbox',
				props: {
					label: 'Display "Toggle All" button'
				},
				'default': false
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://codex.wordpress.org/Function_Reference/get_users',
					label: 'Query args',
					tooltip: 'Query arguments for getting user. Same as in the get_user() function.'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	url: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			placeholder: {
				control: 'Input',
				props: {
					label: 'Placeholder'
				},
				'default': ''
			},
			size: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Size of the input box'
				},
				'default': ''
			},
			required: {
				control: 'Checkbox',
				props: {
					label: 'Required'
				},
				'default': false
			},
			disabled: {
				control: 'Checkbox',
				props: {
					label: 'Disabled'
				},
				'default': false
			},
			readonly: {
				control: 'Checkbox',
				props: {
					label: 'Read only'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	video: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			max_file_uploads: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of files',
					tooltip: 'Leave empty for unlimited uploads'
				},
				'default': ''
			},
			max_status: {
				control: 'Checkbox',
				props: {
					label: 'Show status',
					tooltip: 'Display how many files uploaded/remaining'
				},
				'default': true
			},
			force_delete: {
				control: 'Checkbox',
				props: {
					label: 'Force delete',
					tooltip: 'Delete files from the Media Library when deleting them from post meta'
				},
				'default': false
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	wysiwyg: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			std: {
				control: 'Input',
				props: {
					label: 'Default value'
				},
				'default': ''
			},
			fieldsData: {
				control: 'Checkbox',
				props: {
					label: 'Save data in the fieldsData format'
				},
				'default': false
			},
			options: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/functions/wp_editor/',
					label: 'Editor options'
				},
				'default': []
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	group: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			label_description: {
				control: 'Input',
				props: {
					label: 'Label description',
					tooltip: 'Display below the field label'
				},
				'default': ''
			},
			desc: {
				control: 'Input',
				props: {
					label: 'Input description',
					tooltip: 'Display below the field input'
				},
				'default': ''
			},
			collapsible: {
				control: 'Checkbox',
				props: {
					label: 'Collapsible',
					setting: 'collapsible'
				},
				'default': false
			},
			default_state: {
				control: 'Select',
				props: {
					label: 'Default state',
					dependency: 'collapsible:true',
					options: {
						expanded: 'Expanded',
						collapsed: 'Collapsed'
					}
				},
				'default': 'expanded'
			},
			save_state: {
				control: 'Checkbox',
				props: {
					label: 'Save state',
					dependency: 'collapsible:true'
				},
				'default': false
			},
			group_title: {
				control: 'Input',
				props: {
					label: 'Group title',
					tooltip: 'Use {field_id} for a sub-field value and {#} for the clone index (if the group is cloneable)',
					dependency: 'collapsible:true'
				},
				'default': ''
			},
			clone: {
				control: 'Checkbox',
				props: {
					label: 'Cloneable',
					tooltip: 'Make field cloneable (repeatable)'
				},
				'default': false
			},
			sort_clone: {
				control: 'Checkbox',
				props: {
					label: 'Sortable',
					tooltip: 'Allows to drag-and-drop reorder clones',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_default: {
				control: 'Checkbox',
				props: {
					label: 'Clone default value',
					dependency: 'clone:true'
				},
				'default': false
			},
			clone_as_multiple: {
				control: 'Checkbox',
				props: {
					label: 'Clone as multiple',
					tooltip: 'Save clones in multiple rows in the database',
					dependency: 'clone:true'
				},
				'default': false
			},
			max_clone: {
				control: 'Input',
				props: {
					type: 'number',
					label: 'Max number of clones',
					tooltip: 'Leave empty for unlimited clones',
					dependency: 'clone:true'
				},
				'default': ''
			},
			add_button: {
				control: 'Input',
				props: {
					label: 'Add more text',
					tooltip: 'Custom text for the the "+ Add more" button. Leave empty to use the default text.',
					dependency: 'clone:true'
				},
				'default': ''
			}
		},
		advanced: {
			before: {
				control: 'Textarea',
				props: {
					label: 'Before',
					tooltip: 'Custom HTML displayed before the field output'
				},
				'default': ''
			},
			after: {
				control: 'Textarea',
				props: {
					label: 'After',
					tooltip: 'Custom HTML displayed after the field output'
				},
				'default': ''
			},
			'class': {
				control: 'Input',
				props: {
					label: 'Custom CSS class'
				},
				'default': ''
			},
			save_field: {
				control: 'Checkbox',
				props: {
					label: 'Save field value',
					tooltip: 'Uncheck this checkbox to prevent the field from saving its value into the database. Useful when you want to save yourself. Note: not working in the block editor.'
				},
				'default': true
			},
			sanitize_callback: {
				control: 'Input',
				props: {
					label: '<a href="https://docs.metabox.io/sanitization/" target="_blank" rel="noreferrer noopener">Custom sanitize callback</a>',
					tooltip: 'Enter PHP function name for custom sanitization. Enter "none" to disable sanitization.'
				},
				'default': ''
			},
			attributes: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/custom-attributes/',
					label: 'Custom HTML5 attributes',
					tooltip: 'Use this to add custom HTML5 attributes (like data-*). Work only for text input fields.'
				},
				'default': []
			},
			custom_settings: {
				control: 'KeyValue',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
					label: 'Custom settings',
					tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
				},
				'default': []
			},
			conditional_logic: {
				control: 'ConditionalLogic',
				props: {
					link: 'https://docs.metabox.io/extensions/meta-box-conditional-logic/',
					label: 'Conditional logic',
					tooltip: 'Toogle the field visibility by other fields\' values'
				},
				'default': null
			}
		}
	},
	tab: {
		general: {
			name: {
				control: 'Name',
				props: {
					label: 'Label',
					tooltip: 'Leave empty to make the input 100% width.'
				},
				'default': ''
			},
			id: {
				control: 'Id',
				props: {
					label: 'ID',
					required: true,
					tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
				},
				'default': null
			},
			icon_type: {
				control: 'Select',
				props: {
					label: 'Icon type',
					options: {
						dashicons: 'Dashicons',
						fontawesome: 'Font Awesome',
						url: 'Custom URL'
					}
				},
				'default': 'dashicons'
			},
			icon: {
				control: 'Icon',
				props: {
					label: 'Icon',
					dependency: 'icon_type:dashicons'
				},
				'default': null
			},
			icon_fa: {
				control: 'Input',
				props: {
					label: '<a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank" rel="noopenner noreferrer">Icon CSS class</a>',
					dependency: 'icon_type:fontawesome'
				},
				'default': ''
			},
			icon_url: {
				control: 'Input',
				props: {
					label: 'Icon URL',
					dependency: 'icon_type:url'
				},
				'default': ''
			}
		}
	}
};

const unSupportedTypes = [
	'button_group',
	'background',
	'custom_html',
	'key_value',
	'osm',
	'switch',
	'sidebar',
	'file_upload',
	'image_upload',
	'single_image',
	'tab',
	'group'
];

const unSupportedGeneralSettings = [
	'label_description',
	'required',
	'disabled',
	'readonly',

	'sort_clone',
	'clone_default',
	'clone_as_multiple',
	'max_clone',
	'add_button'
];

const unSupportedAdvancedSettings = [
	'save_field',
	'sanitize_callback',
	'custom_settings',
	'conditional_logic'
];

unSupportedTypes.forEach( type => dotProp.delete( fieldsData, type ) );

Object.entries( fieldsData ).forEach( ( [ type, data ] ) => {
	unSupportedGeneralSettings.forEach( setting => dotProp.delete( fieldsData[ type ].general, setting ) );

	// Rename custom_settings to attributes to maintain backward compatibility.
	let attributes = dotProp.get( fieldsData[ type ].advanced, 'custom_settings' );
	dotProp.set( fieldsData[ type ].advanced, 'attributes', attributes );

	unSupportedAdvancedSettings.forEach( setting => dotProp.delete( fieldsData[ type ].advanced, setting ) );
} );

export default () => <textarea style={ { fontFamily: 'monospace' } } rows="50">{ JSON.stringify( fieldsData, null, 2 ) }</textarea>;
