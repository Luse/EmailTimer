import { combineReducers } from 'redux'
import { userReducer} from './States/User';
import { gifsReducer } from './States/Gifs';
import { campaignsReducer } from './States/Campaigns';

export const Reducer = combineReducers({
    userReducer,
    gifsReducer,
    campaignsReducer
});