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
//         case FETCH_DATA_START:
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

