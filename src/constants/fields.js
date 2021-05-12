export const fieldTypes = {
	'Basic': {
		'button': 'Button',
		// button_group
		'checkbox': 'Checkbox',
		'checkbox_list': 'Checkbox List',
		'email': 'Email',
		'hidden': 'Hidden',
		'number': 'Number',
		'password': 'Password',
		'radio': 'Radio',
		'range': 'Range',
		'select': 'Select',
		'select_advanced': 'Select Advanced',
		'text': 'Text',
		'textarea': 'Textarea',
		'url': 'URL',
	},
	'Advanced': {
		'autocomplete': 'Autocomplete',
		// background
		'color': 'Color Picker',
		// custom_html
		'date': 'Date',
		'datetime': 'Date Time',
		'fieldset_text': 'Fieldset Text',
		'map': 'Google Maps',
		// key_value
		'image_select': 'Image Select',
		'oembed': 'oEmbed',
		// osm
		'slider': 'Slider',
		// switch
		'text_list': 'Text List',
		'time': 'Time',
		'wysiwyg': 'WYSIWYG',
	},
	'WordPress': {
		'post': 'Post',
		// sidebar
		'taxonomy': 'Taxonomy',
		'taxonomy_advanced': 'Taxonomy Advanced',
		'user': 'User',
	},
	'Upload': {
		'file': 'File',
		'file_advanced': 'File Advanced',
		// file_upload
		'file_input': 'File Input',
		'image': 'Image',
		'image_advanced': 'Image Advanced',
		// image_upload
		// single_image
		'video': 'Video',
	},
	'Layout': {
		'divider': 'Divider',
		'heading': 'Heading',
	}
}

const name = {
	control: 'Name',
	props: {
		label: 'Label',
		tooltip: 'Leave empty to make the input 100% width.'
	},
	'default': ''
};
const id = {
	control: 'Input',
	props: {
		label: 'ID',
		required: true,
		tooltip: 'Must be unique, will be used as meta key when saving to the database. Recommended to use only lowercase letters, numbers, and underscores.'
	},
	'default': null
};
const desc = {
	control: 'Input',
	props: {
		label: 'Description',
		tooltip: 'Display below the field input'
	},
	'default': ''
};
const clone = {
	control: 'Checkbox',
	props: {
		label: 'Cloneable',
		tooltip: 'Make field cloneable (repeatable)'
	},
	'default': false
};
const std = {
	control: 'Input',
	props: {
		label: 'Default value'
	},
	'default': ''
};
const size = {
	control: 'Input',
	props: {
		type: 'number',
		label: 'Size of the input box'
	},
	'default': ''
};
const placeholder = {
	control: 'Input',
	props: {
		label: 'Placeholder'
	},
	'default': ''
};
const options = {
	control: 'Textarea',
	props: {
		label: 'Choices',
		tooltip: 'Enter each choice on a line. For more control, you may specify both value and label like \'red: Red\' (without quotes)'
	},
	'default': ''
};

const advanced = {
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
	attributes: {
		control: 'KeyValue',
		props: {
			link: 'https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes',
			label: 'Custom settings',
			tooltip: 'Use this to add custom settings for the field. The custom settings will overwrite existing settings if they have the same key.'
		},
		'default': []
	}
};

export const fieldsData = {
	autocomplete: {
		general: {
			name,
			id,
			desc,
			options,
			size,
			clone
		},
		advanced
	},
	button: {
		general: {
			name,
			id,
			desc,
			std: {
				control: 'Input',
				props: {
					label: 'Button text'
				},
				'default': ''
			}
		},
		advanced
	},
	checkbox: {
		general: {
			name,
			id,
			desc,
			std: {
				control: 'Checkbox',
				props: {
					label: 'Checked by default'
				},
				'default': false
			},
			clone
		},
		advanced
	},
	checkbox_list: {
		general: {
			name,
			id,
			desc,
			options,
			std: {
				control: 'Textarea',
				props: {
					label: 'Default value',
					tooltip: 'Enter each value on a line'
				},
				'default': ''
			},
			clone
		},
		advanced
	},
	color: {
		general: {
			name,
			id,
			desc,
			std,
			clone
		},
		advanced
	},
	date: {
		general: {
			name,
			id,
			desc,
			std,
			size,
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
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://api.jqueryui.com/datepicker/',
					label: 'Date picker options'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	datetime: {
		general: {
			name,
			id,
			desc,
			std,
			size,
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
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'https://api.jqueryui.com/datepicker/',
					label: 'Date picker options'
				},
				'default': []
			},
			clone
		},
		advanced
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
	},
	email: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
			size,
			clone
		},
		advanced
	},
	fieldset_text: {
		general: {
			name,
			id,
			desc,
			options: {
				control: 'KeyValue',
				props: {
					label: 'Inputs',
					valuePlaceholder: 'Enter label'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	file: {
		general: {
			name,
			id,
			desc,
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
			clone
		},
		advanced
	},
	file_advanced: {
		general: {
			name,
			id,
			desc,
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
			clone
		},
		advanced
	},
	file_input: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
			size,
			clone
		},
		advanced
	},
	map: {
		general: {
			name,
			id,
			desc,
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
				control: 'Input',
				props: {
					label: 'Address field',
					tooltip: 'The ID of address field. For multiple fields, separate them by comma.',
					required: true
				},
				'default': null
			},
			region: {
				control: 'Input',
				props: {
					label: '<a href="https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains" target="_blank" rel="noopenner noreferrer">Region code</a>',
					tooltip: 'The region code, specified as a country code top-level domain. Use for autocompleting addresses.'
				},
				'default': ''
			},
			clone
		},
		advanced
	},
	heading: {
		general: {
			name,
			desc
		},
		advanced
	},
	hidden: {
		general: {
			id,
			std
		},
		advanced
	},
	image: {
		general: {
			name,
			id,
			desc,
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
			clone
		},
		advanced
	},
	image_advanced: {
		general: {
			name,
			id,
			desc,
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
			clone
		},
		advanced
	},
	image_select: {
		general: {
			name,
			id,
			desc,
			options,
			std,
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			clone
		},
		advanced
	},
	number: {
		general: {
			name,
			id,
			desc,
			std,
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
			placeholder,
			clone
		},
		advanced
	},
	oembed: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
			size,
			clone
		},
		advanced
	},
	password: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
			size,
			clone
		},
		advanced
	},
	post: {
		general: {
			name,
			id,
			desc,
			post_type: {
				// control: 'ReactSelect',
				control: 'Select',
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
			parent: {
				control: 'Checkbox',
				props: {
					label: 'Set as parent',
					tooltip: 'Set the selected post as the parent for the current being edited post.'
				},
				'default': false
			},
			placeholder,
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/classes/wp_query/',
					label: 'Query args',
					tooltip: 'Query arguments for getting posts. Same as in the WP_Query class.'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	radio: {
		general: {
			name,
			id,
			desc,
			options,
			std,
			inline: {
				control: 'Checkbox',
				props: {
					label: 'Inline',
					tooltip: 'Display choices on a single line'
				},
				'default': false
			},
			clone
		},
		advanced
	},
	range: {
		general: {
			name,
			id,
			desc,
			std,
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
			clone
		},
		advanced
	},
	select: {
		general: {
			name,
			id,
			desc,
			options,
			std,
			placeholder,
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
				},
				'default': false
			},
			clone
		},
		advanced
	},
	select_advanced: {
		general: {
			name,
			id,
			desc,
			options,
			std,
			placeholder,
			multiple: {
				control: 'Checkbox',
				props: {
					label: 'Multiple',
					tooltip: 'Allow to select multiple choices'
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
			clone
		},
		advanced
	},
	slider: {
		general: {
			name,
			id,
			desc,
			std,
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
			clone
		},
		advanced
	},
	taxonomy: {
		general: {
			name,
			id,
			desc,
			taxonomy: {
				// control: 'ReactSelect',
				control: 'Select',
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
			placeholder,
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/functions/get_terms/',
					label: 'Query args',
					tooltip: 'Query arguments for getting terms. Same as in the get_terms() function.'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	taxonomy_advanced: {
		general: {
			name,
			id,
			desc,
			taxonomy: {
				// control: 'ReactSelect',
				control: 'Select',
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
			placeholder,
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://developer.wordpress.org/reference/functions/get_terms/',
					label: 'Query args',
					tooltip: 'Query arguments for getting terms. Same as in the get_terms() function.'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	text: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
			size,
			clone
		},
		advanced
	},
	text_list: {
		general: {
			name,
			id,
			desc,
			options: {
				control: 'KeyValue',
				props: {
					label: 'Inputs',
					keyPlaceholder: 'Placeholder',
					valuePlaceholder: 'Label'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	textarea: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
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
			clone
		},
		advanced
	},
	time: {
		general: {
			name,
			id,
			desc,
			std,
			size,
			js_options: {
				control: 'KeyValue',
				props: {
					link: 'http://trentrichardson.com/examples/timepicker',
					label: 'Time picker options'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	user: {
		general: {
			name,
			id,
			desc,
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
			placeholder,
			query_args: {
				control: 'KeyValue',
				props: {
					link: 'https://codex.wordpress.org/Function_Reference/get_users',
					label: 'Query args',
					tooltip: 'Query arguments for getting user. Same as in the get_user() function.'
				},
				'default': []
			},
			clone
		},
		advanced
	},
	url: {
		general: {
			name,
			id,
			desc,
			std,
			placeholder,
			size,
			clone
		},
		advanced
	},
	video: {
		general: {
			name,
			id,
			desc,
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
			clone
		},
		advanced
	},
	wysiwyg: {
		general: {
			name,
			id,
			desc,
			std,
			raw: {
				control: 'Checkbox',
				props: {
					label: 'Save data in the raw format'
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
			clone
		},
		advanced
	}
}