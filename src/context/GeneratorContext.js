import createDataContext from './createDataContext';
import generatorReducer from './GeneratorReducer';
import { GENERATE_PHP_CODE } from './GeneratorActions';

const generatePHPCode = dispatch => params => {
    const paramsFormatted = formatParams(params);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: paramsFormatted })
    };
    fetch('https://metabox.io/wp-json/meta-box-online-generator/generator', requestOptions)
        .then(response => response.json())
        .then(data =>
            dispatch({ type: GENERATE_PHP_CODE, payload: data })
        )
        .catch(err => {
            console.error(err);
        });
};

const formatParams = (params) => {
    let result = {};

    // format fields params
    Object.keys(params).map((keyName, keyIndex) => {
        if (!keyName.includes('fields')) {
            result[keyName] = Object.values(params)[keyIndex]
        }
        else {
            const keys = keyName.split('_');
            keys.reduce((result, value, index) => {
                if (!result[value]) {
                    result[value] = {}
                }
                if (index === keys.length - 1) {
                    result[value] = Object.values(params)[keyIndex]
                }
                return result[value]
            }, result);
        }
    })

    return result
}



export const { Provider, Context, actions } = createDataContext(
    generatorReducer,
    { generatePHPCode },
    { data: '' }
);