import { combineReducers } from 'redux'
import { userReducer} from './States/User';
import { gifsReducer } from './States/Gifs';
import { campaignsReducer } from './States/Campaigns';
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    userReducer,
    gifsReducer,
    campaignsReducer
  })