import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = props => {
  return (
    <div className="flex-column card" key={props.question.id}>
      <div id={props.question.id} onClick={props.handleDelete}><i id={props.question.id} className='fas fa-trash'/></div>
      <Link to="/user-feed/edit"><i className='fas fa-edit'/></Link>
      <h2>Q: {props.question.content}</h2>
      <p>Topic: {props.question.topic}</p>
    </div>
  );
};

export default QuestionCard;
