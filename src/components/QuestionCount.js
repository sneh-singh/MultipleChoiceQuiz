import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
       {props.counter === 5 ? (<button type="button" className="result-link" onClick={props.viewreults}>End Game</button>) : (<div></div>)}
    </div>
  );

}

export default QuestionCount;