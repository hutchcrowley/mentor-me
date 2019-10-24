import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { addQuestion, getQuestions } from '../../actions'
const QuestionAdd = props => {
  const [questions, setTopics] = useState([]);
  useEffect(() => {
    console.log('1')
    props.getQuestions()
    setTopics(props.questions)
  }, [])

    const arr = questions.map(question => {
      return question.topic
    })
    const unique = (val, index, self) => {
      return self.indexOf(val) === index
    }
    // console.log('topics', questions)
    const _quesitions = arr.filter(unique)
    // console.log('_topics', arr)
  
  return (
    <form>
      <label htmlFor="topic">Topic</label>
      <select>
        {_quesitions.map(
          question => {
            // return console.log(question.topic)
            return <option value={question}>{question}</option>
          }
        )
        }
      </select>
      <label htmlFor="questions">Questions</label>
      <input type="text" placeholder="type your question here" />
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
