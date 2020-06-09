import { TEXT_INPUT, NUMBER_INPUT, CHECKBOX, fields, DROPDOWN_MENU, RADIO_CHECKBOX } from '../constants/constants';

export const getLabel = (keyName, type) => {
    let result = '';
    switch (keyName) {
        case 'id':
            result = 'ID'
            break;
        case 'name':
            result = 'Name'
            break;
        case 'desc':
            result = 'Description'
            break;
        case 'std':
            if (type === 'checkbox') {
                result = 'Checked?'
            } else {
                result = 'Default'
            }
            break;
        case 'size':
            result = 'Size'
            break;
        case 'placeholder':
            result = 'Placeholder'
            break;
        case 'clone':
            result = 'Clone'
            break;
        case 'min':
            result = 'Min'
            break;
        case 'max':
            result = 'Max'
            break;
        case 'step':
            result = 'Step'
            break;
        case 'inline':
            result = 'Inline'
            break;
        case 'multiple':
            result = 'Multiple?'
            break;
        case 'rows':
            result = 'Rows'
            break;
        case 'cols':
            result = 'Columns'
            break;
        case 'prefix':
            result = 'Prefix'
            break;
        case 'suffix':
            result = 'Suffix'
            break;
        case 'address_field':
            result = 'Address Field'
            break;
        case 'api_key':
            result = 'Api Key'
            break;
        case 'region':
            result = 'Region'
            break;
        case 'timestamp':
            result = 'Timestamp'
            break;
        case 'max_file_uploads':
            result = 'Max File Uploads'
            break;
        case 'force_delete':
            result = 'Force Delete?'
            break;
        case 'mime_type':
            result = 'Mime Type'
            break;
        case 'max_status':
            result = 'Max Status'
            break;
        case 'options':
            result = 'Options'
            break;
        case 'parent':
            result = 'Parent'
            break;
        case 'field_type':
            result = 'Field Type'
            break;
        case 'post_type':
            result = 'Post Type'
            break;
        case 'taxonomy':
            result = 'Taxonomy'
            break;
        
    }

    return result;
}

export const getElementType = (name) => {
    const inputsText = ['id', 'name', 'desc', 'std', 'placeholder', 'min', 'max', 'rows', 'cols', 'prefix', 'suffix', 'address_field', 'api_key', 'region', 'mime_type'];
    const inputsNumber = ['size', 'step', 'max_file_uploads'];
    const checkboxes = ['clone', 'inline', 'multiple', 'timestamp', 'force_delete', 'max_status', 'parent'];
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
    Object.keys(generalItems).map(item => {
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
    Object.keys(advancedItems).map(item => {
        const elementName = `fields-${index}-${item}`;
        let value = document.getElementsByName(elementName)[0]?.value;
        value = value ? value : advancedItems[item]
        if (item === 'attributes') {
            let attributes = []
            for (let i = 0; i < value; i++) {
                attributes[i] = {}
                attributes[i]['key'] = document.getElementsByName(`fields-${index}-${item}-${i}-key`)[0]?.value;
                attributes[i]['label'] = document.getElementsByName(`fields-${index}-${item}-${i}-value`)[0]?.value;
            }
            result[item] = attributes;
        } else {
            result[item] = value;
        }
    })

    return result
}
