import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentIndexItem from './comment_index_item';
import CommentFormContainer from '../comment_form/comment_form_container';

class CommentIndex extends React.Component{

  constructor(props){
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments(){
    let comments = this.props.answer.comments;
    // sort comments here
    return comments.map((comment) => {
      return <CommentIndexItem key={comment.id} answerId={this.props.answer.id} comment={comment} currentUser={this.props.currentUser} votes={this.props.votes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
    });
  }

  render(){
    return (
      <div id="comments-index-header">Comments:
        <CommentFormContainer answerId={this.props.answer.id}/>
        <div id="comments-index">
          { this.renderComments() }
        </div>
      </div>
    );
  }

}

export default withRouter(CommentIndex);
