import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { registerReducer } from './registerReducer'
import {questionsReducer} from './questionsReducer'

export const rootReducer = combineReducers({
    log: loginReducer,
    reg: registerReducer,
    quest: questionsReducer,
})
