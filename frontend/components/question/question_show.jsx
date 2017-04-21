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
    if(Object.keys(this.props.questions).length > 0){
      question = this.props.questions[this.props.params.id];
      if(question.answers){
        return <AnswerIndex question={question} currentUser={this.props.currentUser} votes={this.props.votes} upvote={this.props.upvote} editUpvote={this.props.editUpvote} />
      }
    }
    return;
  }

  render(){
    let answerIndex = this.createAnswerIndex();
    return (
      <div id="questions-show-header">
        <div id="answer-index">
          { answerIndex }
        </div>
      </div>
    );
  }

}

export default withRouter(QuestionShow);
