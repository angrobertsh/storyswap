import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{

  constructor(props){
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments(){
    // let answers = this.props.question.answers;
    // return answers.map((answer) => {
    //   return <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} answerVotes={this.props.answerVotes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
    // });
  }

  render(){
    return (
      <div id="comments-index-header">Comments:
        <div id="comments-index">
          { this.renderComments() }
        </div>
      </div>
    );
  }

}

export default withRouter(CommentIndex);
