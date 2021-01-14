import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { AllReducer } from './reducer' 

export const Store = createStore(AllReducer , applyMiddleware(thunk))  