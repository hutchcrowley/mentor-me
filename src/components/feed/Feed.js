import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import QuestionCard from './QuestionCard';

const Feed = props => {
  useEffect(() => {
    props.getQuestions();
  }, []);
  return (
    <div>
      {props.questions
        ? props.questions.map(question => (
            <QuestionCard key={question.id} question={question} />
          ))
        : ''}
    </div>
  );
};
const mapStateToProp = state => {
  return {
    questions: state.quest.data
  };
};
export default connect(
  mapStateToProp,
  {
    getQuestions
  }
)(Feed);
