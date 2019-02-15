import { combineReducers } from 'redux';
import router from './router';
import films from './films';

const rootReducer = combineReducers({
    router,
    films,
})


export default rootReducer