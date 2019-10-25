import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = props => {
  return (
    <div className="flex-column card" key={props.question.id}>
      <div className="flex-row">
        <Link to={`/user-feed/edit/${props.question.id}`}>
          <i className="fas fa-edit" />
        </Link>
        <div
          className="link"
          id={props.question.id}
          onClick={props.handleDelete}
        >
          <i id={props.question.id} className="fas fa-trash" />
        </div>
      </div>
      <h2>Q: {props.question.content}</h2>
      <p>Topic: {props.question.topic}</p>
    </div>
  );
};

export default QuestionCard;
