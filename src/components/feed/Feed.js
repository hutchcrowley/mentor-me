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
    <div className="feed-div">
      <Link className="submit" to="/user-feed/add">
        Add New Question
      </Link>
      <div className="flex-row card-container">
        {props.questions
          ? props.questions.map(question => (
              <QuestionCard key={question.id} question={question} />
            ))
          : ''}
      </div>
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
