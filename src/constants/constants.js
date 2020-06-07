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
  'text': {
    'general': {
      'id': '',
      'type': 'text',
      'name': 'Text',
      'desc': '',
      'std': '',
      'placeholder': '',
      'size': '',
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
      'placeholder': '',
      'size': '',
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
  'autocomplete': {
    'general': {
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




  'password': {
    'general': {
      'id': '',
      'type': 'password',
      'name': 'Password',
      'desc': '',
      'std': '',
      'placeholder': '',
      'size': '',
      'clone': false
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
    'general' : {
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

  'checkbox_list': {
    'general': {
      'id': '',
      'name': 'Checkbox List',
      'type': 'checkbox_list',
      'desc': '',
      'std': '',
      'options': [],
      'clone': false,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },


  'checkbox': {
    'general':{
      'id': '',
      'name': 'Checkbox',
      'type': 'checkbox',
      'desc': 'Default Description',
      'std': 0,
      'clone': false,
    },
    'advanced':{
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
      'std': '',
      'placeholder': '',
      'options': [],
      'clone': false,
      'inline': true,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },

  'wysiwyg': {
    'general':{
      'id': '',
      'name': 'WYSIWYG',
      'type': 'wysiwyg',
      'desc': '',
      'std': '',
      'raw': false,
      'clone': false,
      'options': [],
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'editor': []
    }
  },

  'hidden': {
    'general':{
      'id': '',
      'type': 'hidden',
      'desc': '',
      'std': '',
      'name': 'Hidden',
      'clone': false
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': []
    }
  },

  'heading': {
    'general':{
      'id': '',
      'type': 'heading',
      'desc': '',
      'std': '',
      'name': 'Heading',
      'clone': false
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': []
    }
  },

  'color': {
    'general':{
      'id': '',
      'name': 'Color Picker',
      'type': 'color',
      'std': '',
      'desc': '',
      'clone': false,
      'class': '',
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': []
    }
  },

  'date': {
    'general':{
      'id': '',
      'type': 'date',
      'name': 'Date Picker',
      'std': '',
      'desc': '',
      'js_options': [],
      'clone': false,
      'class': '',
      'size': '',
      'inline': false,
      'timestamp': false,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'datePicker': []
    }
  },

  'datetime': {
    'general':{
      'id': '',
      'type': 'datetime',
      'name': 'Date Time Picker',
      'std': '',
      'desc': '',
      'js_options': [],
      'clone': false,
      'class': '',
      'size': '',
      'inline': false,
      'timestamp': false,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'datetimePicker': []
    }
  },

  'time': {
    'general': {
      'id': '',
      'name': 'Time Picker',
      'type': 'time',
      'std': '',
      'desc': '',
      'js_options': [],
      'class': '',
      'clone': false,
      'size': ''
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'timePicker': []
    }
  },

  'divider': {
    'id': 'uniqid',
    'type': 'divider',
    'name': 'Divider',
  }, // khong co 2 tab general va advanced

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
    'advanced':{
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
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },

  'oembed': {
    'general': {
      'id': '',
      'type': 'oembed',
      'name': 'oEmbed',
      'std': '',
      'desc': 'oEmbed description',
      'size': '',
      'placeholder': '',
      'clone': false
    },
    'advanced':{
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

  'map': {
    'general': {
      'id': '',
      'type': 'map',
      'name': 'Map',
      'std': '',
      'desc': '',
      'address_field': '',
      'class': '',
      'api_key': '',
      'region': '',
      'clone': false
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },

  'slider': {
    'general':{
      'id': '',
      'type': 'slider',
      'name': 'Slider',
      'std': '',
      'desc': '',
      'js_options': [],
      'prefix': '',
      'suffix': '',
      'clone': false
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'slider': []
    }
  },


  'taxonomy': {
    'general':{
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
    'advanced':{
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
      'placeholder': '',
      'query_args': '',
      'taxonomy': 'category',
      'field_type': 'select',
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'query_args': []
    }
  },

  'post': {
    'general':{
      'id': '',
      'type': 'post',
      'name': 'Post',
      'std': '',
      'desc': '',
      'post_type': 'post',
      'field_type': 'select_advanced', // select, select_advanced
      'parent': false,
      'query_args': '',
      'clone': false,
      'placeholder': ''
    },
    'advanced':{
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
      'force_delete': false,
      'max_file_uploads': '',
      'mime_type': '',
      'clone': false,
      'size': ''
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },

  'file_advanced': {
    'general':{
      'id': '',
      'type': 'file_advanced',
      'name': 'File Advanced',
      'std': '',
      'desc': '',
      'force_delete': false,
      'mime_type': '',
      'max_file_uploads': 4,
      'max_status': true,
      'clone': false,
      'size': ''
    },
    'advanced':{
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
    'advanced':{
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

  'image': {
    'general': {
      'id': '',
      'type': 'image',
      'name': 'Image Upload',
      'std': '',
      'clone': false,
      'desc': '',
      //			'force_delete' : false,
      //			'max_file_uploads': 4,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },

  'video': {
    'general':{
      'id': '',
      'type': 'video',
      'name': 'Video',
      'std': '',
      'desc': '',
      'force_delete': false,
      'max_file_uploads': 4,
      'clone': false,
    },
    'advanced':{
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

  'image_advanced': {
    'general': {
      'id': '',
      'type': 'image_advanced',
      'name': 'Image Advanced',
      'desc': '',
      'max_file_uploads': '',
      'force_delete' : false,
      'clone': false,
      'max_status': false,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
  },

  'image_select': {
    'general':{
      'id': '',
      'type': 'image_select',
      'name': 'Image Select',
      'std': '',
      'desc': '',
      // 'force_delete': false,
      // 'max_file_uploads': 4,
      'options': [],
      'clone': false,
      'multiple': false,
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
    }
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
    'general':{
      'id': '',
      'type': 'user',
      'name': 'User',
      'std': '',
      'desc': '',
      'class': '',
      'query_args': '',
      'field_type': 'select_advanced', // select, select_advanced,
      'placeholder': '',
      'clone': false
    },
    'advanced':{
      'before': '',
      'after': '',
      'class': '',
      'attributes': [],
      'query_args': []
    }
  },
}

export const TEXT_INPUT = 'TEXT_INPUT'
export const NUMBER_INPUT = 'NUMBER_INPUT'
export const CHECKBOX = 'CHECKBOX'
