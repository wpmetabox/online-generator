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
  'Date & Time Fields': {
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
  'text': {
    'general': {
      'id': '',
      'type': 'text',
      'name': 'Text',
      'desc': '',
      'std': '',
      'size': '',
      'placeholder': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'datalist': {
        'id': '',
        'items': []
      }
    }
  },
  'number': {
    'general': {
      'id': '',
      'type': 'number',
      'name': 'Number',
      'desc': '',
      'std': '',
      'placeholder': '',
      'step': '',
      'min': '',
      'max': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'url': {
    'general': {
      'id': '',
      'type': 'url',
      'name': 'URL',
      'desc': '',
      'std': '',
      'size': '',
      'placeholder': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'email': {
    'general': {
      'id': '',
      'name': 'Email',
      'type': 'email',
      'desc': '',
      'std': '',
      'size': '',
      'placeholder': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'range': {
    'general': {
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
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'text_list': {
    'general': {
      'id': '',
      'type': 'text_list',
      'name': 'Text List',
      'desc': '',
      'std': '',
      'options': [],
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'checkbox': {
    'general': {
      'id': '',
      'name': 'Checkbox',
      'type': 'checkbox',
      'desc': 'Default Description',
      'std': false,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'checkbox_list': {
    'general': {
      'id': '',
      'name': 'Checkbox List',
      'type': 'checkbox_list',
      'desc': '',
      'options': [],
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'button': {
    'general': {
      'id': '',
      'type': 'button',
      'name': 'Button',
      'desc': '',
      'std': '',
      'class': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'password': {
    'general': {
      'id': '',
      'type': 'password',
      'name': 'Password',
      'desc': '',
      'std': '',
      'size': '',
      'placeholder': '',
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'radio': {
    'general': {
      'id': '',
      'name': 'Radio',
      'type': 'radio',
      'desc': '',
      'options': [],
      'inline': true,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'select': {
    'general': {
      'id': '',
      'name': 'Select',
      'type': 'select',
      'desc': '',
      'std': '',
      'placeholder': 'Select an Item',
      'options': [],
      'multiple': false,
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'select_advanced': {
    'general': {
      'id': '',
      'name': 'Select Advanced',
      'type': 'select_advanced',
      'desc': '',
      'std': '',
      'placeholder': 'Select an Item',
      'options': [],
      'multiple': false,
      'js_options': [],
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'select2': []
    }
  },
  'textarea': {
    'general': {
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
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'hidden': {
    'general': {
      'id': '',
      'type': 'hidden',
      'name': 'Hidden',
      'desc': '',
      'std': '',

      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': []
    }
  },
  'image_select': {
    'general': {
      'id': '',
      'type': 'image_select',
      'name': 'Image Select',
      'std': '',
      'desc': '',
      // 'force_delete': false,
      // 'max_file_uploads': 4,
      'options': [],
      'multiple': false,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'color': {
    'general': {
      'id': '',
      'name': 'Color Picker',
      'type': 'color',
      'std': '',
      'desc': '',
      'clone': false,
      'class': '',
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': []
    }
  },
  'oembed': {
    'general': {
      'id': '',
      'type': 'oembed',
      'name': 'oEmbed',
      'desc': 'oEmbed description',
      'std': '',
      'size': '',
      'placeholder': '',
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'datalist': {
        'id': '',
        'items': []
      }
    }
  },
  'slider': {
    'general': {
      'id': '',
      'type': 'slider',
      'name': 'Slider',
      'std': '',
      'desc': '',
      'prefix': '',
      'suffix': '',
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'slider': []
    }
  },
  'wysiwyg': {
    'general': {
      'id': '',
      'name': 'WYSIWYG',
      'type': 'wysiwyg',
      'desc': '',
      'std': '',
      'raw': false,
      'clone': false,
      'options': [],
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'editor': []
    }
  },
  'autocomplete': {
    'general': {
      'id': '',
      'type': 'autocomplete',
      'name': 'Auto Complete',
      'desc': '',
      'size': '',
      'options': [],
      'multiple': false,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'fieldset_text': {
    'general': {
      'id': '',
      'type': 'fieldset_text',
      'name': 'Fieldset Text',
      'std': '',
      'desc': '',
      'class': '',
      'rows': 2,
      'options': [],
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'map': {
    'general': {
      'id': '',
      'type': 'map',
      'name': 'Map',
      'std': '',
      'desc': '',
      'address_field': '',
      'api_key': '',
      'region': '',
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'heading': {
    'general': {
      'id': '',
      'type': 'heading',
      'name': 'Heading',
      'desc': '',
      'std': '',
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': []
    }
  },
  'divider': {
    'id': 'uniqid',
    'type': 'divider',
    'name': 'Divider',
  },
  'date': {
    'general': {
      'id': '',
      'type': 'date',
      'name': 'Date Picker',
      'std': '',
      'desc': '',
      'class': '',
      'size': '',
      'inline': false,
      'timestamp': false,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'js_options': []
    }
  },
  'datetime': {
    'general': {
      'id': '',
      'type': 'datetime',
      'name': 'Date Time Picker',
      'std': '',
      'desc': '',
      'class': '',
      'size': '',
      'inline': false,
      'timestamp': false,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'js_options': []
    }
  },
  'time': {
    'general': {
      'id': '',
      'name': 'Time Picker',
      'type': 'time',
      'std': '',
      'desc': '',
      'size': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'js_options': []
    }
  },
  'post': {
    'general': {
      'id': '',
      'type': 'post',
      'name': 'Post',
      'std': '',
      'desc': '',
      'post_type': 'post',
      'field_type': 'select_advanced', // select, select_advanced
      'placeholder': '',
      'parent': false,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'query_args': []
    }
  },
  'taxonomy': {
    'general': {
      'id': '',
      'type': 'taxonomy',
      'name': 'Taxonomy',
      'std': '',
      'desc': '',
      'placeholder': '',
      'query_args': '',
      'taxonomy': 'category',
      'field_type': 'select',
      'parent': false,
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'query_args': []
    }
  },
  'taxonomy_advanced': {
    'general': {
      'id': '',
      'type': 'taxonomy_advanced',
      'name': 'Taxonomy Advanced',
      'std': '',
      'desc': '',
      'taxonomy': 'category',
      'field_type': 'select',
      'placeholder': '',
      'parent': false,
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'query_args': []
    }
  },
  'user': {
    'general': {
      'id': '',
      'type': 'user',
      'name': 'User',
      'std': '',
      'desc': '',
      'class': '',
      'field_type': 'select_advanced', // select, select_advanced,
      'placeholder': '',
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'query_args': []
    }
  },
  'file': {
    'general': {
      'id': '',
      'type': 'file',
      'name': 'File',
      'std': '',
      'desc': '',
      'max_file_uploads': '',
      'size': '',
      'force_delete': false,
      'clone': false
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'file_input': {
    'general': {
      'id': '',
      'type': 'file_input',
      'name': 'File Input',
      'placeholder': '',
      'size': '',
      'desc': '',
      'std': '',
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'datalist': {
        'id': '',
        'items': []
      }
    }
  },
  'file_advanced': {
    'general': {
      'id': '',
      'type': 'file_advanced',
      'name': 'File Advanced',
      'std': '',
      'desc': '',
      'size': '',
      'max_file_uploads': 4,
      'force_delete': false,
      'mime_type': '',
      'max_status': true,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'image_advanced': {
    'general': {
      'id': '',
      'type': 'image_advanced',
      'name': 'Image Advanced',
      'desc': '',
      'max_file_uploads': '',
      'force_delete': false,
      'clone': false,
      'max_status': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'image': {
    'general': {
      'id': '',
      'type': 'image',
      'name': 'Image Upload',
      'std': '',
      'desc': '',
      'clone': false,
      //			'force_delete' : false,
      //			'max_file_uploads': 4,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },
  'video': {
    'general': {
      'id': '',
      'type': 'video',
      'name': 'Video',
      'std': '',
      'desc': '',
      'force_delete': false,
      'max_file_uploads': 4,
      'clone': false,
    },
    'advanced': {
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
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
}

export const TEXT_INPUT = 'TEXT_INPUT'
export const NUMBER_INPUT = 'NUMBER_INPUT'
export const CHECKBOX = 'CHECKBOX'
export const LIST_WORDPRESS_FIELDS = ["post", "taxonomy", "taxonomy_advanced", "user"];
export const ADVANCED_ADDITIONAL = {
  "attribute" : {
    "title": "Custom attributes",
    "titleLink": "https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes",
    "buttonName": "+ Attribute"
  },
  "select2" : {
    "title": "Select2 options",
    "titleLink": "https://select2.org/",
    "buttonName": "+ Option"
  },
  "query_args" : {
    "title": "Query arguments",
    "titleLink": null,
    "buttonName": "+ Option"
  },
  "slider" : {
    "title": "Slider options",
    "titleLink": 'https://api.jqueryui.com/slider/',
    "buttonName": "+ Option"
  },
  "editor" : {
    "title": "Editor options",
    "titleLink": 'https://codex.wordpress.org/Function_Reference/wp_editor',
    "buttonName": "+ Option"
  },
  "date_picker": {
    "title": "Date picker options",
    "titleLink": 'https://api.jqueryui.com/datepicker/',
    "buttonName": "+ Option"
  },
  "datetime_picker": {
    "title": "Date picker options",
    "titleLink": 'https://api.jqueryui.com/datepicker/',
    "buttonName": "+ Option"
  },
  "time_picker": {
    "title": "Time picker options",
    "titleLink": 'https://trentrichardson.com/examples/timepicker/',
    "buttonName": "+ Option"
  }
}