import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getQuestionId} from '../../actions'

const QuestionSearch = props => {
    const [id, setId] = useState({search: ''})

    const changeHandle = (e) => {
            setId({
                ...id,
                [e.target.name]: e.target.value
            })
    }

    const handleSubmit = (payload) => {
        
        props.getQuestionId(payload)
        console.log(payload, 'handlesubmit QS')
    }
    return (
        <>
            <form onSubmit={(e) => {handleSubmit(id)
            e.preventDefault()
            }}>
                <label htmlFor='search'>Search bar</label>
                <input 
                name='search' 
                type='text' 
                onChange={changeHandle}
                value={id.search}
                placeholder='search a number'
                 />
                <button>Search</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {getQuestionId})(QuestionSearch)