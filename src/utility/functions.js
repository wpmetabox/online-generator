import { TEXT_INPUT, NUMBER_INPUT, CHECKBOX, fields, DROPDOWN_MENU, RADIO_CHECKBOX, LIST_OPTION_TYPE, DATA_LIST_TYPE } from '../constants/constants';

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
    address_field: "Address Field",
    api_key: "Api Key",
    region: "Region",
    timestamp: "Timestamp",
    max_file_uploads: "Max File Uploads",
    force_delete: "Force Delete?",
    mime_type: "Mime Type",
    max_status: "Max Status",
    options: "Options",
    parent: "Parent",
    field_type: "Field Type",
    post_type: "Post Type",
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
            select: 'StdChoice',
            textarea: 'StdChoice',
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
        };
        return types[type] || 'Options';
    case 'js_options':
        types = {
            date: 'JsOptionsDate',
            datetime: 'JsOptionsDate',
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

export const getDataCopiedItem = (type, index) => {
    let data = fields[type];
    let result = {}
    result.general = getGeneralData(data.general, index);
    result.advanced = getAdvancedData(data.advanced, index)

    return result
}

const getGeneralData = (generalItems, index) => {
    let result = {}
    Object.keys(generalItems).forEach(item => {
        const elementName = `fields-${index}-${item}`;
        let value = document.getElementsByName(elementName)[0]?.value;
        value = value ? value : generalItems[item]
        if (item === 'options') {
            let options = []
            for (let i = 0; i < value; i++) {
                options[i] = {}
                options[i]['key'] = document.getElementsByName(`fields-${index}-${item}-${i}-key`)[0]?.value;
                options[i]['label'] = document.getElementsByName(`fields-${index}-${item}-${i}-label`)[0]?.value;
            }
            result[item] = options;
        } else {
            result[item] = value
        }
    })

    return result
}

const getAdvancedData = (advancedItems, index) => {
    let result = {}
    Object.keys(advancedItems).forEach(item => {
        const elementName = `fields-${index}-${item}`;
        let value = document.getElementsByName(elementName)[0]?.value;
        value = value ? value : advancedItems[item]
        if (LIST_OPTION_TYPE.includes(item)) {
            let optionalList = []
            for (let i = 0; i < value; i++) {
                optionalList[i] = {}
                optionalList[i]['key'] = document.getElementsByName(`fields-${index}-${item}-${i}-key`)[0]?.value;
                optionalList[i]['label'] = document.getElementsByName(`fields-${index}-${item}-${i}-value`)[0]?.value;
            }

            result[item] = optionalList;
        } else if (DATA_LIST_TYPE.includes(item)) {
            let dataList = []
            let idDataList = document.getElementsByName(`fields-${index}-datalist-id`)[0]?.value
            const listValue = document.getElementsByName(`fields-${index}-datalist-options-0`);

            listValue.forEach(input => {
                dataList.push(input.value);
            });

            result[item] = { id: idDataList, items: dataList };
        } else {
            result[item] = value;
        }
    })

    return result
}

export const ucfirst = string => string.charAt(0).toUpperCase() + string.slice(1);
const toTitleCase = string => string.split('_').map(ucfirst).join('');