import createDataContext from './createDataContext';
import serverApi from '../api/serverApi';
import generatorReducer from './GeneratorReducer';
import { GENERATE_PHP_CODE } from './GeneratorActions';

const generatePHPCode = dispatch => params => {
    const paramsFormatted = formatParams(params);

    serverApi.post('/generator', { data: paramsFormatted }).then(response => {
        console.log('ggg', response)
        if (response.status === 200) {
            dispatch({ type: GENERATE_PHP_CODE, payload: response.data })
        }
    }).catch(err => {
        console.error(err);
    });
};

const formatParams = (params) => {
    let result = {};
    result['fields'] = {}

    // format fields params
    Object.keys(params).map((keyName, keyIndex) => {
        if (!keyName.includes('fields')) {
            result[keyName] = Object.values(params)[keyIndex]
        }
        else {
            const keys = keyName.split('_');
            for (let i = 1; i < keys.length - 1; i++) {
                if (!result['fields'][keys[i]]) {
                    result['fields'][keys[i]] = {}
                }
                result['fields'][keys[i]][keys[i + 1]] = Object.values(params)[keyIndex]
            }
        }
    })

    console.log(result)

    return result
}



export const { Provider, Context, actions } = createDataContext(
    generatorReducer,
    { generatePHPCode },
    { data: '' }
);