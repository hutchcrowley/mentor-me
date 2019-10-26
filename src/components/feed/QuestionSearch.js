import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getQuestions, editQuestion} from '../../actions'
import {axiosWithAuth} from '../../utils/axiosWithAuth'

const QuestionSearch = props => {
    const [id, setId] = useState({search: ''})
    const [idArray, setIdArray] = useState()
    const {match} = props
    const [payload, setPayload] = useState({
        id: match.params.id,
        topic: '',
        content: '',
        updated_at: Date.now(),
        user_id: 0
    })
    

    useEffect(() => {
        axiosWithAuth()
            .get(`/questions`)
            .then(res => {
                setIdArray(res.data)
                // res.data.map((data) => {
                //     setIdArray([...idArray, data.id])
                // })
            })
            .catch(err => console.log(err))
    }, [])



    const changeHandle = (e) => {
            setId({
                ...id,
                [e.target.name]: e.target.value
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.history.push(`/user-feed/post/${props.question.id}`)
    }
    return (
        <>
            <div>Available id's to search: {idArray ? (idArray.map(data => {
                return(`${data.id}, `)
            })) : ''}</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search bar </label>
                <input 
                name='search' 
                type='text' 
                onChange={changeHandle}
                value={id.search}
                placeholder='search by id'
                 />
                <button>Search</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.quest.data
    }
}

export default connect(mapStateToProps, {getQuestions})(QuestionSearch)