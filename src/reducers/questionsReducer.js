// import {
//     FETCH_DATA_START,
//     FETCH_DATA_SUCCESS,
//     FETCH_DATA_FAILED

// } from '../actions'
// // inital strucure of the question reducer... 
// const init = {
//     data: [],
//     isFetching: false,
//     err = ''
// }
// // REDUCER ---- state machine for getting data from the api
// export const questionsReducer = (state = init, action) => {
//     switch (action.type) {
//         case FETCH_DATA_START:ya
//             return {
//                 ...state,
//                 isFetching: true
//             }
//         case FETCH_DATA_SUCCESS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 data: action.payload
//             }
//         case FETCH_DATA_FAILED:
//             return {
//                 ...state,
//                 isFetching: false,
//                 err: action.payload
//             }
//         default:
//             return state
//     }
// } -- AUSTIN

import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    ADD_QUESTION_START,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAILED,
    EDIT_QUESTION_START,
    EDIT_QUESTION_SUCCESS,
    EDIT_QUESTION_FAILED
} from '../actions';

const init = {
    data: [],
    isFetching: false,
    isAdding: false,
    err: ''
}

export const questionsReducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case FETCH_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }
        case ADD_QUESTION_START:
            return {
                ...state,
                isAdding: true
            }
        case ADD_QUESTION_SUCCESS:
            return {
                ...state,
                isAdding: false,
                data: [...state.data, action.payload]
            }
        case ADD_QUESTION_FAILED:
            return {
                ...state,
                isAdding: false,
                err: action.payload
            }
        case EDIT_QUESTION_START:
            return {
                ...state,
                isEditing: true
            }
        case EDIT_QUESTION_SUCCESS:
            return {
                ...state,
                isEditing: false
            }
        case EDIT_QUESTION_FAILED:
            return {
                ...state,
                isEditing: false,
                err: action.payload
            }
        default:
            return state
    }
}