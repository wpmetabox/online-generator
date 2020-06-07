import { TEXT_INPUT, NUMBER_INPUT, CHECKBOX } from '../constants/constants';

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