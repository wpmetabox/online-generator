import createDataContext from './createDataContext';
import serverApi from '../api/serverApi';
import generatorReducer from './GeneratorReducer';
import { GENERATE_PHP_CODE } from './GeneratorActions';

const generatePHPCode = dispatch => params => {
    console.log('aaaa', params)
    const paramsFormatted = formatParams(params);

    serverApi.post('/generator', { data: paramsFormatted }).then(response => {
        if (response.status === 200) {
            dispatch({ type: GENERATE_PHP_CODE, payload: response.data })
        }
    }).catch(err => {
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
            console.log(keys)
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
    console.log('result', result)

    return result
}



export const { Provider, Context, actions } = createDataContext(
    generatorReducer,
    { generatePHPCode },
    { data: '' }
);