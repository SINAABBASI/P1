import {combineReducers,createStore} from 'redux';
import itemsReducer from './reducers/root';

const rootReducer = combineReducers ( {
     lists_part: itemsReducer
});

const configStore = () => {
    return createStore(rootReducer);
}

export default configStore;