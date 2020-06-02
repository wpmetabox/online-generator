import { GENERATE_PHP_CODE } from './GeneratorActions';

const generatorReducer = (state, action) => {
    switch (action.type) {
        case GENERATE_PHP_CODE:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default generatorReducer;