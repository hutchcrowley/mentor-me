import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import QuestionCard from './QuestionCard';
import { Link } from 'react-router-dom';

const Feed = props => {
  useEffect(() => {
    props.getQuestions();
  }, []);
  return (
    <div>
      <Link to="/user-feed/add">Add New Question</Link>
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
