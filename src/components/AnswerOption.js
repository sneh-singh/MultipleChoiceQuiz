import React from 'react';

function AnswerOption(props) {

  return (
    <li className="answerOption">
      <label className="radioLabel" htmlFor={props.index}>
        {props.answerContent}
      </label>
      <input id="horizontal-list"
        type="radio"
        id={props.index}
        value={props.index}
        className="checkmark"
        checked={(props.selectedAnswer === props.index) ? 1 : 0 }
        onChange={props.onAnswerSelected}
      />
    </li>
  );

}

export default AnswerOption;