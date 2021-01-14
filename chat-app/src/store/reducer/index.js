import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import ChatReducer from './chatReducer'

export const AllReducer = combineReducers({
    Auth : AuthReducer,
    Chat : ChatReducer,
})
