import { CHECKBOX, DROPDOWN_MENU, NUMBER_INPUT, RADIO_CHECKBOX, TEXT_INPUT } from '../constants/constants';

export const getLabel = (name, type) => {
  const labels = {
    class: "Custom CSS class",
    std: "Default value",
    size: "Size of the input box",
    placeholder: "Placeholder",
    min: "Minimum value",
    max: "Maximum value",
    rows: "Rows",
    cols: "Columns",
    prefix: "Prefix",
    suffix: "Suffix",
    timestamp: "Timestamp",
    max_file_uploads: "Maximum number of files",
    options: "Options",
    parent: "Parent",
    taxonomy: "Taxonomy",
  };

  return (name === 'std' && type === 'checkbox') ? "Checked?" : labels[name];
};

export const getElementControlName = (name, type) => {
  let types;
  switch (name) {
    case 'std':
        types = {
            button: 'StdButton',
            checkbox: 'StdCheckbox',
            checkbox_list: 'StdChoice',
            map: 'StdMap',
            select: 'StdChoice',
            textarea: 'StdChoice',
            wysiwyg: 'StdChoice',
        };
        return types[type] || 'TextInput';
    case 'placeholder':
    case 'class':
    case 'min':
    case 'max':
      return 'TextInput';
    case 'size':
    case 'rows':
    case 'cols':
    case 'max_file_uploads':
      return 'NumberInput';
    case 'inline':
        types = {
            date: 'InlineDate',
            datetime: 'InlineDate',
        };
        return types[type] || 'Inline';
    case 'options':
        types = {
            fieldset_text: 'OptionsFieldsetText',
            text_list: 'OptionsTextList',
            wysiwyg: 'OptionsWysiwyg',
        };
        return types[type] || 'Options';
    case 'query_args':
        types = {
            taxonomy: 'QueryArgsTaxonomy',
            taxonomy_advanced: 'QueryArgsTaxonomy',
            user: 'QueryArgsUser',
        };
        return types[type] || 'QueryArgs';
    case 'js_options':
        types = {
            date: 'JsOptionsDate',
            datetime: 'JsOptionsDate',
            slider: 'JsOptionsSlider',
            time: 'JsOptionsTime',
        };
        return types[type] || 'JsOptions';
    default:
      return toTitleCase(name);
  }
}

export const getElementType = (name) => {
    const inputsText = ['id', 'name', 'desc', 'std', 'placeholder', 'min', 'max', 'rows', 'cols', 'prefix', 'suffix', 'address_field', 'api_key', 'region', 'mime_type'];
    const inputsNumber = ['size', 'step', 'max_file_uploads'];
    const checkboxes = ['clone', 'inline', 'multiple', 'timestamp', 'force_delete', 'max_status', 'parent', 'raw'];
    const ratioCheckbox = ['field_type'];
    const dropdownMenu = ['post_type', 'taxonomy']
    let type = ''
    if (inputsText.includes(name)) {
        type = TEXT_INPUT
    }
    if (inputsNumber.includes(name)) {
        type = NUMBER_INPUT
    }
    if (checkboxes.includes(name)) {
        type = CHECKBOX
    }
    if (ratioCheckbox.includes(name)) {
        type = RADIO_CHECKBOX
    }
    if (dropdownMenu.includes(name)) {
        type = DROPDOWN_MENU
    }

    return type
}

const toTitleCase = string => string.split('_').map(ucfirst).join('');

const ucfirst = string => string[ 0 ].toUpperCase() + string.slice( 1 );
export const ucwords = ( string, delimitor = ' ', join = ' ' ) => string.split( delimitor ).map( ucfirst ).join( join );


export const uniqid = () => Math.random().toString( 36 ).substr( 2 );