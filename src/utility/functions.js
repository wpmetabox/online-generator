export const getLabel = (keyName) => {
    console.log('kkk', keyName)
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