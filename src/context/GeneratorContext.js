import createDataContext from './createDataContext';
import serverApi from '../api/serverApi';
import generatorReducer from './GeneratorReducer';
import { GENERATE_PHP_CODE } from './GeneratorActions';

const generatePHPCode = dispatch => params => {

    serverApi.post('/generator', { data: params }).then(response => {
        console.log('ggg', response)
        if (response.status === 200) {
            dispatch({ type: GENERATE_PHP_CODE, payload: response.data })
        }
    }).catch(err => {
        console.error(err);
    });
};



export const { Provider, Context, actions } = createDataContext(
    generatorReducer,
    { generatePHPCode },
    { data: '' }
);