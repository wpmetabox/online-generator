import { TEXT_INPUT, NUMBER_INPUT, CHECKBOX, fields } from '../constants/constants';

export const getLabel = (keyName) => {
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
            result = 'Default'
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
    }
    return result;
}

export const getElementType = (name) => {
    const inputsText = ['id', 'name', 'desc', 'std', 'placeholder', 'min', 'max'];
    const inputsNumber = ['size'];
    const checkboxes = ['clone'];

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

    return type
}

export const getDataCopiedItem = (type, index) => {
    let data = fields[type];
    let result = {}
    result.general = getGenralData(data.general, index);
    result.advanced = getAdvancedData(data.advanced, index)

    return result
}

const getGenralData = (generalItems, index) => {
    let result = {}
    Object.keys(generalItems).map(item => {
        const elementName = `fields_${index}_${item}`;
        let value = document.getElementsByName(elementName)[0]?.value;
        value = value ? value : generalItems[item]
        result[item] = value
    })

    return result
}

const getAdvancedData = (advancedItems, index) => {
    let result = {}
    Object.keys(advancedItems).map(item => {
        const elementName = `fields_${index}_${item}`;
        let value = document.getElementsByName(elementName)[0]?.value;
        value = value ? value : advancedItems[item]
        if (item === 'attributes') {
            let attributes = []
            for (let i = 0; i < value; i++) {
                attributes[i] = {}
                attributes[i]['key'] = document.getElementsByName(`fields_${index}_${item}_${i}_key`)[0]?.value;
                attributes[i]['label'] = document.getElementsByName(`fields_${index}_${item}_${i}_label`)[0]?.value;
            }
            result[item] = attributes;
        } else {
            result[item] = value
        }

    })

    return result
}
