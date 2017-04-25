import React from 'react';
import { Link, withRouter } from 'react-router';
import AnswerIndex from '../answer/answer_index';

class QuestionShow extends React.Component{

  constructor(props){
    super(props);
    this.createAnswerIndex = this.createAnswerIndex.bind(this);
  }

  createAnswerIndex(){
    let question;
    let answerIndex = []
    if(Object.keys(this.props.questions).length > 0){
      question = this.props.questions[this.props.params.id];
      answerIndex.push(<div className="questions-show-header" key={"q"+question.id}> {question.title} </div>)
      if(question.answers){
        answerIndex.push(<AnswerIndex key={"ai1"} question={question} currentUser={this.props.currentUser} votes={this.props.votes} upvote={this.props.upvote} editUpvote={this.props.editUpvote} />)
      }
    }
    return answerIndex;
  }

  render(){
    let answerIndex = this.createAnswerIndex();
    return (
      <div id="questions-show-container">
        { answerIndex }
      </div>
    );
  }

}

export default withRouter(QuestionShow);
