import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = props => {
  console.log(props.question);

  return (
    <div key={props.id}>
      <h2>{props.question.content}</h2>
      <p>{props.question.topic}</p>
      <Link to="/user-feed/edit">Edit</Link>
    </div>
  );
};

export default QuestionCard;
