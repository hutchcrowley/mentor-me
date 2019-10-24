import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuestions,delQuestion } from '../../actions';
import QuestionCard from './QuestionCard';
import { Link } from 'react-router-dom';

const Feed = props => {
  useEffect(() => {
    props.getQuestions();
  }, [props.questions]);
  const handleDelete = e =>{
    e.preventDefault()
    props.delQuestion(e.target.id)
    props.getQuestions()
  }
  return (
    <div className="feed-div">
      <Link className="submit" to="/user-feed/add">
        Add New Question
      </Link>
      <div className="flex-row card-container">
        {props.questions
          ? props.questions.map(question => (
              <QuestionCard key={question.id} question={question} handleDelete={handleDelete} />
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
    getQuestions,
    delQuestion
  }
)(Feed);
