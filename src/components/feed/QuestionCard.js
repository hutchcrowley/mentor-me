import React from 'react';

const QuestionCard = props => {
  console.log(props.question);

  return <div key={props.id}></div>;
};

export default QuestionCard;
