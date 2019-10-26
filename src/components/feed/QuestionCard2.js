import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {editQuestion, addQuestion} from '../../actions'
import styled from 'styled-components'

const QuestionCard2 = props => {
    const [canEdit, setCanEdit] = useState(false)

    const [canAdd, setCanAdd] = useState(false)
    
    const [option, setOption] = useState({value: 'Programming'})

    const [payload, setPayload] = useState({
        id: '',
        topic: option.value,
        content: '',
        updated_at: Date.now(),
        user_id:0
    })

    const handleChange = e => {
        
        setPayload({
            if(){},
            ...payload,
            [e.target.name]: e.target.value
        })
    }

    const submit = e => {
        e.preventDefault()
        props.editQuestion(payload)
        window.location.reload()

    }
    const toggleEdit = (e) => {
        setCanEdit(true)
        setCanAdd(false)
        
        setPayload({
            ...payload,
            id: props.question.id
        })
    }
    const toggleAdd = (e) => {
        setCanAdd(true)
        setCanEdit(false)
        
        setPayload({
            ...payload,
            id: 1000
        })
        console.log(payload,'suh')
    }

    const addSubmit = e => {
        e.preventDefault()
        
        console.log(payload)

        props.addQuestion(payload)
       

        
        setTimeout(() => (window.location = 'https://mentor-me.xxsadpandaxx.now.sh/user-feed'), 3000)
        alert('Redirection to questions')
    }

    const changeOption = e => {
        setOption({
            value: e.target.value
        })
        setPayload({
            ...payload,
            [e.target.name]: e.target.value
        })
    }

    const AddQ = styled.div`
    width: auto;
    font-size: 1.5rem;
    background: #FFFFFF;
    border-radius: 5px;
    padding: .5rem;
    text-align: center;
    margin-bottom: .5rem;
    `
    

    return (
        <section className='feed-section'>
            <div className="flex-column card" key={props.question.id}>
                <h2>Q: {props.question.content}</h2>
                <p>Topic: {props.question.topic}</p>
                <div className="flex-row">
                    <div className='link' onClick={toggleEdit}>
                        <i className="fas fa-edit" />
                    </div>
                    <div
                    className="link"
                    id={props.question.id}
                    onClick={props.handleDelete}
                    >
                    <i id={props.question.id} className="fas fa-trash" />
                    </div>
                </div>
                {canEdit ? 
                <div>
                    <form onSubmit={submit}>
                        <select 
                            value={payload.topic} 
                            onChange={changeOption}
                            name='topic'
                        >
                            <option value='Photography'>Photography</option>
                            <option value='Small Business'>Small Business</option>
                            <option value='Video Editing'>Video Editing</option>
                            <option value='Programming'>Programming</option>
                        </select>
                        <input
                            name='content'
                            value={payload.content}
                            onChange={handleChange}
                            placeholder='Question'
                        />
                        <button>Submit</button>
                    </form>
                </div> 
                : ''}
            </div>
            <AddQ onClick={toggleAdd}>Add new question</AddQ>
            {canAdd ?
            <div>
                <form id='form1k' onSubmit={addSubmit}>
                    <select value={option.value} onChange={changeOption}>
                        <option value='Photography'>Photography</option>
                        <option value='Small Business'>Small Business</option>
                        <option value='Video Editing'>Video Editing</option>
                        <option value='Programming'>Programming</option>
                    </select>
                    <input
                        type='text'
                        onChange={handleChange}
                        value={payload.content}
                        name='content'
                        placeholder='Type question'
                    />                    
                    <button >Submit</button>
                </form>
            </div>
            : ''
            }
            <Link to='/user-feed'>Return to questions page</Link>
        </section>
    
  );
};

const mapStateToProps = (state) => {
    return{
    }
}
export default connect(mapStateToProps,{
    editQuestion, addQuestion
})(QuestionCard2);


