import React from 'react';

class Result extends React.Component {
  constructor(props){
    super(props);
  }
  renderQuestins(){
    return  this.props.quizResult.map((_data,index) =>{
        return (
            <div className="list-grp">
                <b>Q.{index + 1} {_data.question}</b> { ((this.props.answers[index] + 1) === _data.answerindex) ? (<span className="status_correct">Correct </span>) : (<span className="status_incorrect">Incorrect </span>)}
                <p>Correct Answer: {_data.answers[_data.answerindex - 1].content}</p>
                <p>Your answer:  {(typeof this.props.answers[index] == "undefined" || isNaN(this.props.answers[index])) ? "Not attempted" : (_data.answers[this.props.answers[index]].content)}</p>  
            </div>
        )
    })
  }
  render (){
    return (
        <div  className="quiz-story">
            <div>
                <p className="resultHead">Result</p>
                <div>{this.renderQuestins()}</div>
            </div>
        </div>
    )
  }
}

export default Result;