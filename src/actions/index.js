import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { tsPropertySignature } from '@babel/types'

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

export const DELETE_DATA_START = 'DELETE_DATA_START'
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS'
export const DELETE_DATA_FAILED = 'DELETE_DATA_FAILED'

export const ADD_QUESTION_START = 'ADD_QUESTION_START'
export const ADD_QUESTION_SUCCESS = 'ADD_QUESTION_SUCCESS'
export const ADD_QUESTION_FAILED = 'ADD_QUESTION_FAILED'

export const EDIT_QUESTION_START = 'EDIT_DATA_START'
export const EDIT_QUESTION_SUCCESS = 'EDIT_DATA_SUCCESS'
export const EDIT_QUESTION_FAILED = 'EDIT_DATA_FAILED'

export const login = (creds) => dispatch => {
    dispatch({ type: LOG_IN_START })

    axios
        .post('https://mentor-me-app-be.herokuapp.com/api/users/login', creds)
        .then(res => {
            dispatch({ type: LOG_IN_SUCCESS })
            window.localStorage.setItem('token', res.data.token)
            //pass to state, not really needed because just loggin in
        })
        .catch(err => {
            dispatch({ type: LOG_IN_FAILED, payload: err })
        })
}

export const register = (payload) => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
        .post('https://mentor-me-app-be.herokuapp.com/api/users/register', payload)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS })
            console.log(res)
            window.localStorage.setItem('token', res.data.token)
            //pass to state, not really needed because just loggin in
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
    dispatch({ type: FETCH_DATA_START })
    axiosWithAuth()
        .get('/questions')
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_DATA_FAILED, payload: err }))
}


export const delQuestion = (id) => dispatch => {
    dispatch({ type: DELETE_DATA_START })
    axiosWithAuth()
        .delete(`/questions/${id}`)
        .then(res => {
            dispatch({ type: DELETE_DATA_SUCCESS})
            console.log('question deleted', res)
        })
        .catch(err => {
            dispatch({ type: DELETE_DATA_FAILED})
            console.log(err)
        })

}

export const addQuestion = (payload) => dispatch => {
    dispatch({ type: ADD_QUESTION_START })
    axiosWithAuth()
        .post('/questions', payload)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_QUESTION_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_QUESTION_FAILED, payload: err })
        })
}

export const editQuestion = (payload)=>dispatch=>{
    dispatch({type:EDIT_QUESTION_START})
    axiosWithAuth()
        .put(`/questions/${payload.id}`, payload)
        .then(res => {
            console.log(res.data)
            dispatch({ type: EDIT_QUESTION_SUCCESS, payload: res })
        })
        .catch(err => {
            dispatch({ type: EDIT_QUESTION_FAILED, payload: err })
        })
}

export const getQuestionId = (payload) => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axiosWithAuth()
        .get(`/questions/${payload.id}`, payload)
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
            console.log('SUCCESS')
            // props.history.push()
        })
        .catch(err => dispatch({ type: FETCH_DATA_FAILED, payload: err }))
}