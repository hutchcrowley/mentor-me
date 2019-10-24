import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = props => {
  console.log(props.question);

  return (
    <div className="flex-column card" key={props.id}>
      <h2>Q: {props.question.content}</h2>
      <p>Topic: {props.question.topic}</p>
      <Link to="/user-feed/edit">Edit</Link>
    </div>
  );
};

export default QuestionCard;
