import {
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILED
} from '../actions'

const inital = {
    isLoggedIn: false
}
export const loginReducer = (state = inital, action) => {
    switch (action.type) {
        case LOG_IN_START:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOG_IN_FAILED:
            return {
                ...state,
                isLoggedIn: false
            }
            default:
                return state
    }
}