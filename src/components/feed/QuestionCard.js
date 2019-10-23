import React from 'react';

const QuestionCard = props => {
  console.log(props.question);

  return (
    <div key={props.id}>
      <h2>{props.question.content}</h2>
      <p>{props.question.topic}</p>
    </div>
  );
};

export default QuestionCard;
