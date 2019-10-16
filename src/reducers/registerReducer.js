import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from '../actions'

const inital = {
    isRegistered: false
}
export const registerReducer = (state = inital, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                isRegistered: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true
            }
        case REGISTER_FAILED:
            return {
                ...state,
                isRegistered: false
            }
        default:
            return state
    }
}