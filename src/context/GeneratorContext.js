import createDataContext from './createDataContext';
import generatorReducer from './GeneratorReducer';
import { GENERATE_PHP_CODE, ERROR } from './GeneratorActions';

const generatePHPCode = dispatch => params => {
    const paramsFormatted = formatParams(params);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: paramsFormatted })
    };
    console.log(paramsFormatted);
    fetch('https://metabox.io/wp-json/meta-box-online-generator/generator', requestOptions)
        .then(response => response.json())
        .then(data => dispatch({ type: GENERATE_PHP_CODE, payload: data, responseTime: (new Date()).getTime() }))
        .catch(err => {
            dispatch({ type: ERROR, responseTime: (new Date()).getTime() })
            console.error(err)
        });
};

const formatParams = (params) => {
    let result = new Map();
    // format fields params
    Object.keys(params).forEach((keyName, keyIndex) => {
        if (!keyName.includes('fields')) {
            result[keyName] = Object.values(params)[keyIndex]
            return;
        }
        // create params for selected fields
        const keys = keyName.split('-');
        keys.reduce((result, value, index) => {
            if (!result[value]) {
                result[value] = {}
            }
            if (index === keys.length - 1) {
                result[value] = Object.values(params)[keyIndex]
            }
            return result[value]
        }, result);
    })

    return result
}

export const { Provider, Context, actions } = createDataContext(
    generatorReducer,
    { generatePHPCode },
    { data: '', responseTime: '' }
);