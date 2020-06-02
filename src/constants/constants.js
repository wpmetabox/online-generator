import { infoIcon, settingIcon, fieldIcon } from './icons';

export const mainTabs = [
  { id: 1, label: 'General', icon: infoIcon },
  { id: 1, label: 'MetaBox', icon: settingIcon },
  { id: 1, label: 'Fields', icon: fieldIcon },
]

export const generalInputs = [
  {
    id: 1,
    placeholder: "Enter function name here",
    label: "Function name",
    name: "function_name",
    defaultValue: "your_prefix_get_meta_box"
  },
  {
    id: 2,
    placeholder: "Enter text domain here",
    label: "Text domain",
    name: "metabox-online-generator",
    defaultValue: "metabox-online-generator"
  },
  {
    id: 3,
    placeholder: "Enter prefix for field ID here",
    label: "Field ID Prefix",
    name: "prefix",
    defaultValue: "prefix-",
    description: "Leave empty to ignore this or use _ to make the fields hidden."
  }
]

export const fieldTypes = {
  'Input Fields': {
    'text': 'Text',
    'number': 'Number',
    'url': 'URL',
    'email': 'Email',
    'range': 'Range',
    'text_list': 'Text List',
  },
  'Basic Fields': {
    'checkbox': 'Checkbox',
    'checkbox_list': 'Checkbox List',
    'button': 'Button',
    'password': 'Password',
    'radio': 'Radio',
    'select': 'Select',
    'select_advanced': 'Select Advanced',
    'textarea': 'Textarea',
    'hidden': 'Hidden',
    'image_select': 'Image Select',
  },
  'Advanced Fields': {
    'color': 'Color picker',
    'oembed': 'OEmbed',
    'slider': 'Slider',
    'wysiwyg': 'WYSIWYG',
    'autocomplete': 'Autocomplete',
    'fieldset_text': 'Fieldset Text',
    'map': 'Map',
    'heading': 'Heading',
    'divider': 'Divider',
  },
  'Date &amp; Time Fields': {
    'date': 'Date',
    'datetime': 'Date Time',
    'time': 'Time',
  },
  'WordPress Fields': {
    'post': 'Post',
    'taxonomy': 'Taxonomy',
    'taxonomy_advanced': 'Taxonomy Advanced',
    'user': 'User',
  },
  'Media Fields': {
    'file': 'HTML File',
    'file_input': 'File Input',
    'file_advanced': 'File Advanced',
    'image_advanced': 'Image Advanced',
    'image': 'HTML Image',
    'video': 'Video',
  },
}

export const fields = {
  'autocomplete': {
    'id': '',
    'type': 'autocomplete',
    'name': 'Auto Complete',
    'desc': '',
    'std': '',
    'placeholder': '',
    'size': '',
    'options': [],
    'clone': false,
  },

  'text_list': {
    'id': '',
    'type': 'text_list',
    'name': 'Text List',
    'desc': '',
    'std': '',
    'options': [],
    'clone': false,
  },

  'text': {
    'id': '',
    'type': 'text',
    'name': 'Text',
    'desc': '',
    'std': '',
    'placeholder': '',
    'size': '',
    'clone': false,
  },

  'textarea': {
    'id': '',
    'type': 'textarea',
    'name': 'Textarea',
    'desc': '',
    'std': '',
    'placeholder': '',
    'rows': '',
    'cols': '',
    'clone': false,
  },

  'number': {
    'id': '',
    'type': 'number',
    'name': 'Number',
    'desc': '',
    'std': '',
    'placeholder': '',
    'min': '',
    'max': '',
    'clone': false,
  },

  'url': {
    'id': '',
    'type': 'url',
    'name': 'URL',
    'desc': '',
    'std': '',
    'placeholder': '',
    'size': '',
    'clone': false,
  },

  'password': {
    'id': '',
    'type': 'password',
    'name': 'Password',
    'desc': '',
    'std': '',
    'placeholder': '',
    'size': '',
  },


  'select': {
    'id': '',
    'name': 'Select',
    'type': 'select',
    'desc': '',
    'std': '',
    'placeholder': 'Select an Item',
    'options': [],
    'multiple': false,
    'clone': false,
  },

  'select_advanced': {
    'id': '',
    'name': 'Select Advanced',
    'type': 'select_advanced',
    'desc': '',
    'std': '',
    'placeholder': 'Select an Item',
    'options': [],
    'multiple': false,
    'js_options': [],
    'clone': false,
  },

  'checkbox_list': {
    'id': '',
    'name': 'Checkbox List',
    'type': 'checkbox_list',
    'desc': '',
    'std': '',
    'options': [],
    'clone': false,
  },


  'checkbox': {
    'id': '',
    'name': 'Checkbox',
    'type': 'checkbox',
    'desc': 'Default Description',
    'std': 0,
    'clone': false,
  },


  'radio': {
    'id': '',
    'name': 'Radio',
    'type': 'radio',
    'desc': '',
    'std': '',
    'placeholder': '',
    'options': [],
    'clone': false,
    'inline': true,
  },

  'range': {
    'id': '',
    'name': 'Range',
    'type': 'range',
    'desc': '',
    'std': 0,
    'min': 0,
    'max': 9,
    'step': 1,
    'clone': false,
  },

  'wysiwyg': {
    'id': '',
    'name': 'WYSIWYG',
    'type': 'wysiwyg',
    'desc': '',
    'std': '',
    'raw': false,
    'clone': false,
    'options': [],
  },

  'email': {
    'id': '',
    'name': 'Email',
    'type': 'email',
    'desc': '',
    'std': '',
    'placeholder': '',
    'clone': false,
  },

  'hidden': {
    'id': '',
    'type': 'hidden',
    'std': '',
    'name': 'Hidden',
  },

  'heading': {
    'id': '',
    'type': 'heading',
    'desc': '',
    'name': 'Heading',
  },

  'color': {
    'id': '',
    'name': 'Color Picker',
    'type': 'color',
    'std': '',
    'desc': '',
    'clone': false,
    'class': '',
  },

  'date': {
    'id': '',
    'type': 'date',
    'name': 'Date Picker',
    'std': '',
    'desc': '',
    'js_options': [],
    'clone': false,
    'class': '',
  },

  'datetime': {
    'id': '',
    'type': 'datetime',
    'name': 'Date Time Picker',
    'std': '',
    'desc': '',
    'js_options': [],
    'clone': false,
    'class': '',
  },

  'time': {
    'id': '',
    'name': 'Time Picker',
    'type': 'time',
    'std': '',
    'desc': '',
    'js_options': [],
    'class': '',
    'clone': false,
  },

  'divider': {
    'id': 'uniqid',
    'type': 'divider',
    'name': 'Divider',
  },

  'fieldset_text': {
    'id': '',
    'type': 'fieldset_text',
    'name': 'Fieldset Text',
    'std': '',
    'desc': '',
    'class': '',
    'rows': 2,
    'options': [],
  },

  'button': {
    'id': '',
    'type': 'button',
    'name': 'Button',
    'desc': '',
    'class': '',
    'clone': false,
  },

  'oembed': {
    'id': '',
    'type': 'oembed',
    'name': 'oEmbed',
    'std': '',
    'desc': 'oEmbed description',
    'size': '',
  },

  'map': {
    'id': '',
    'type': 'map',
    'name': 'Map',
    'std': '',
    'desc': '',
    'address_field': '',
    //			'style'        : '',
    'class': '',
  },

  'slider': {
    'id': '',
    'type': 'slider',
    'name': 'Slider',
    'std': '',
    'desc': '',
    'js_options': [],
    'prefix': '',
    'suffix': '',
  },


  'taxonomy': {
    'id': '',
    'type': 'taxonomy',
    'name': 'Taxonomy',
    'std': '',
    'desc': '',
    'placeholder': '',
    'query_args': '',
    'taxonomy': 'category',
    'field_type': 'select',
  },

  'taxonomy_advanced': {
    'id': '',
    'type': 'taxonomy_advanced',
    'name': 'Taxonomy Advanced',
    'std': '',
    'desc': '',
    'placeholder': '',
    'query_args': '',
    'taxonomy': 'category',
    'field_type': 'select',
  },

  'post': {
    'id': '',
    'type': 'post',
    'name': 'Post',
    'std': '',
    'desc': '',
    'post_type': 'post',
    'field_type': 'select_advanced', // select, select_advanced
    'parent': false,
    'query_args': '',
  },

  'file': {
    'id': '',
    'type': 'file',
    'name': 'File',
    'std': '',
    'desc': '',
    'force_delete': false,
    'max_file_uploads': '',
    'mime_type': '',
  },

  'file_advanced': {
    'id': '',
    'type': 'file_advanced',
    'name': 'File Advanced',
    'std': '',
    'desc': '',
    'force_delete': false,
    'mime_type': '',
    'max_file_uploads': 4,
    'max_status': true,
  },

  'file_input': {
    'id': '',
    'type': 'file_input',
    'name': 'File Input',
    'placeholder': '',
    'size': '',
    'std': '',
    'clone': false,
  },

  'image': {
    'id': '',
    'type': 'image',
    'name': 'Image Upload',
    'std': '',
    'desc': '',
    //			'force_delete' : false,
    //			'max_file_uploads': 4,
  },

  'video': {
    'id': '',
    'type': 'video',
    'name': 'Video',
    'std': '',
    'desc': '',
    'force_delete': false,
    'max_file_uploads': 4,
  },

  'plupload_image': {
    'id': '',
    'type': 'plupload_image',
    'name': 'Plupload Image',
    'std': '',
    'desc': '',
    'force_delete': false,
    'max_file_uploads': 4,
    'js_options': [],
  },

  'image_advanced': {
    'id': '',
    'type': 'image_advanced',
    'name': 'Image Advanced',
    'std': '',
    'desc': '',
  },

  'image_select': {
    'id': '',
    'type': 'image_select',
    'name': 'Image Select',
    'std': '',
    'desc': '',
    'force_delete': false,
    'max_file_uploads': 4,
    'options': [],
  },

  'thickbox_image': {
    'id': '',
    'type': 'thickbox_image',
    'name': 'Thickbox Image',
    'std': '',
    'desc': '',
    'class': '',
    'force_delete': false,
    'max_file_uploads': 4,
  },

  'user': {
    'id': '',
    'type': 'user',
    'name': 'User',
    'std': '',
    'desc': '',
    'class': '',
    'query_args': '',
    'field_type': 'select_advanced', // select, select_advanced
  },
}

