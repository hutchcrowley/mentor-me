import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { addQuestion, getQuestions } from '../../actions'
const QuestionAdd = props => {
  const [payload, setPayload] = useState({
    id: 1000,
    topic: '',
    content: '',
    updated_at: 'today',
    user_id: 0
  })
  const [questions, setTopics] = useState([]);
  useEffect(() => {
    props.getQuestions()
    setTopics(props.questions)
  }, [questions])

  const arr = questions.map(question => {
    return question.topic
  })
  const unique = (val, index, self) => {
    return self.indexOf(val) === index
  }
  const _quesitions = arr.filter(unique)
  const handleChange = (e) => {
    e.preventDefault()
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    })
  }
  const handleClick = e => {
    e.preventDefault()
    setPayload({
      ...payload,
      topic: e.target.value
    })
    // console.log(payload)
  }
  const submit = (e) => {
    e.preventDefault()
    props.addQuestion(payload)
    console.log(payload)
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor="topic">Topic</label>
      {_quesitions.map(
        question => {
          // return console.log(question.topic)
          return <button onClick={handleClick} name={question} value={question}>{question}</button>
        }
      )
      }
      <label htmlFor="questions">Questions</label>
      <input onChange={handleChange} name='content' type="text" placeholder="type your question here" />
      <button type='submit'>add question</button>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    questions: state.quest.data
  }
}
export default connect(mapStateToProps, {
  getQuestions,
  addQuestion
})(QuestionAdd);
