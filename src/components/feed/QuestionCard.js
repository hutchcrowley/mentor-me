import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = props => {
  console.log(props.question);

  return (
    <div className="flex-column card" key={props.id}>
      <i onCLick={props.handleDelete(props.id)} className='fas fa-trash'/>
      <Link to="/user-feed/edit"><i className='fas fa-edit'/></Link>
      <h2>Q: {props.question.content}</h2>
      <p>Topic: {props.question.topic}</p>
    </div>
  );
};

export default QuestionCard;
