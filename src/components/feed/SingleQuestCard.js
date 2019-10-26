import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import QuestionCard2 from './QuestionCard2'
import {getQuestions, delQuestion} from '../../actions'
import {Link} from 'react-router-dom'

const SingleQuestCard = (props) => {

    const [solo, setSolo] = useState({id: '', quest: ''})

    const id = props.match.params.id

    useEffect(() => {
        props.getQuestions();
    }, [])

    const handleDelete = e =>{
        props.delQuestion(e.target.id)
        props.history.goBack()
    }

    useEffect(() => {
        const queMu = props.questions
        queMu.forEach(cv => {
            if(cv.id == id){
                setSolo({
                    ...solo,
                    quest: cv,
                    id: cv.id
                })
            }
        })  
    }, [props])

    return(
        <div>            
            <QuestionCard2 key={solo.quest.id} question={solo.quest} handleDelete={handleDelete}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        questions: state.quest.data
    }
}

export default connect(mapStateToProps, {getQuestions, delQuestion})(SingleQuestCard)