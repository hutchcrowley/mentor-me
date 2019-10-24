import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import {getQuestions, editQuestion}from '../../actions'
const QuestionEdit = props => {
  const { match } = props
  const [payload, setPayload] = useState({
    id: match.params.id,
    topic: '',
    content: '',
    updated_at: Date.now(),
    user_id:0
  })
  const [questions, setTopics] = useState([]);
  useEffect(() => {
    props.getQuestions()
    setTopics(props.questions)
    const matched_question = questions.filter(question => question.id == match.params.id)
    setPayload({...payload,
      topic: matched_question.length > 0 ? matched_question[0].topic : '',
      content:matched_question.length > 0 ? matched_question[0].content : ''
    })
  }, [questions])
  
  
  
  const handleChange = (e) => {
    e.preventDefault()
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    })
  }
  const submit = (e) => {
    e.preventDefault()
    console.log(payload)
    props.editQuestion(payload)
    // props.getQuestions()
    props.history.push('/user-feed')
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor="topic">Topic</label>
      <input
        name='topic'
        value={payload.topic}
        onChange={handleChange}>
      </input>
      <label htmlFor="questions">Questions</label>
      <input
        name='content'
        value={payload.content}
        onChange={handleChange}
      />
      <button>finish</button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return{
    questions: state.quest.data
  }
}
export default connect(mapStateToProps,{
  getQuestions,
  editQuestion
})(QuestionEdit);
