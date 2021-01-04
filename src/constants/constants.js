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

export const TEXT_INPUT = 'TEXT_INPUT'
export const NUMBER_INPUT = 'NUMBER_INPUT'
export const CHECKBOX = 'CHECKBOX'
export const RADIO_CHECKBOX = 'RADIO_CHECKBOX'
export const DROPDOWN_MENU = 'DROPDOWN_MENU'
export const LIST_WORDPRESS_FIELDS = ["post", "taxonomy", "taxonomy_advanced", "user"];
export const ADVANCED_ADDITIONAL = {
  "attributes": {
    "title": "Custom attributes",
    "titleLink": "https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes",
  },
  "select2": {
    "title": "Select2 options",
    "titleLink": "https://select2.org/configuration",
  },
  "query_args": {
    "title": "Query arguments",
    "titleLink": null,
    "buttonName": "+ Option"
  },
  "slider": {
    "title": "Slider options",
    "titleLink": 'https://api.jqueryui.com/slider/',
    "buttonName": "+ Option"
  },
  "editor": {
    "title": "Editor options",
    "titleLink": 'https://codex.wordpress.org/Function_Reference/wp_editor',
    "buttonName": "+ Option"
  },
  "time_picker": {
    "title": "Time picker options",
    "titleLink": 'https://trentrichardson.com/examples/timepicker/',
    "buttonName": "+ Option"
  }
}

export const LIST_OPTION = [
  { type: 'select2', option: 'select_advanced' },
  { type: 'query_args', option: 'post' },
  { type: 'query_args', option: 'taxonomy' },
  { type: 'query_args', option: 'taxonomy_advanced' },
  { type: 'query_args', option: 'user' },
  { type: 'slider', option: 'slider' },
  { type: 'editor', option: 'wysiwyg' },
  { type: 'date_picker', option: 'date' },
  { type: 'datetime_picker', option: 'datetime' },
  { type: 'time_picker', option: 'time' }
]

export const DATA_LIST = ['text', 'oembed', 'file_input'];
export const DATA_LIST_TYPE = ['datalist'];

export const LIST_OPTION_TYPE = [
  'attributes',
  'query_args',
  'js_options',
  'options',
]

export const LIST_ADD_SELECT = ["checkbox_list", "radio", "select", "select_advanced", "image_select",  "autocomplete"];
export const LIST_NO_HEADING = ["text_list", "fieldset_text"];

export const LIST_FIELD_TYPE = {
  "post": [
    { type: "select", value: "Select" },
    { type: "select_tree", value: "Select tree" },
    { type: "select_advanced", value: "Select advanced" },
    { type: "checkbox_list", value: "Checkbox list" },
    { type: "checkbox_tree", value: "Checkbox tree" },
    { type: "radio_list", value: "Radio list" },
  ],
  "taxonomy": [
    { type: "select", value: "Select" },
    { type: "select_tree", value: "Select tree" },
    { type: "select_advanced", value: "Select advanced" },
    { type: "checkbox_list", value: "Checkbox list" },
    { type: "checkbox_tree", value: "Checkbox tree" },
    { type: "radio_list", value: "Radio list" },
  ],
  "taxonomy_advanced": [
    { type: "select", value: "Select" },
    { type: "select_tree", value: "Select tree" },
    { type: "select_advanced", value: "Select advanced" },
    { type: "checkbox_list", value: "Checkbox list" },
    { type: "checkbox_tree", value: "Checkbox tree" },
    { type: "radio_list", value: "Radio list" },
  ],
  "user": [
    { type: "select", value: "Select" },
    { type: "select_advanced", value: "Select advanced" },
    { type: "checkbox_list", value: "Checkbox list" },
    { type: "radio_list", value: "Radio list" },
  ],
}
