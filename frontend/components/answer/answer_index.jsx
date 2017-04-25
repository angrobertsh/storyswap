import React from 'react';
import { Link, withRouter } from 'react-router';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component{

  constructor(props){
    super(props);
    this.renderAnswers = this.renderAnswers.bind(this);
  }

  renderAnswers(){
    let answers = this.props.question.answers;
    return answers.map((answer) => {
      return <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} votes={this.props.votes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
    });
  }

  render(){
    return (
      <div id="answer-index">
        <div id="answers-index-header">Answers:</div>
        <div id="answers">
          { this.renderAnswers() }
        </div>
        <div id="answers-index-nav">
          <Link to={"/question"}><button className="answers-button">New Question</button></Link>
        </div>
      </div>
    );
  }

}

export default withRouter(AnswerIndex);
