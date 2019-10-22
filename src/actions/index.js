import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

//#region MACROS
export const LOG_IN_START = 'LOG_IN_START'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

// export const FETCH_DATA_START = 'FETCH_DATA_START'
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_START'
// export const FETCH_DATA_FAILED = 'FETCH_DATA_START'
//-- AUSTIN
//#endregion 

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'


export const login = (creds) => dispatch => {
    window.localStorage.setItem('creds', JSON.stringify(creds))
    dispatch({ type: LOG_IN_START })
    
    const token = window.localStorage.getItem('token')
    creds = {
        ...creds,
        token: token
    }
    axios
        .post('http://localhost:5000/login', creds)
        .then(res => {
            dispatch({ type: LOG_IN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LOG_IN_FAILED, payload: err })
        })
}

export const register = (payload) => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
        .post('http://localhost:5000/register', payload)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS })
            window.localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILED, payload: err })
        })
}
//QUESTION ACTION --- GET DATA FROM THE SERVER
    //                         applyMiddleware(thunk)
// export const getQuestions = () => dispatch => {
//     dispatch({ type: FETCH_DATA_START })
//     axiosWithAuth()
//         .get('/api/questions')
//         .then(res => {
//             dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
//         })
//         .catch(err => dispatch({type:FETCH_DATA_FAILED, payload:err})
// }   AUSTIN -- 

export const getQuestions = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axiosWithAuth()
        .get('/api/questions')
        .then(res => {
            dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type:FETCH_DATA_FAILED, payload: err}))
}
