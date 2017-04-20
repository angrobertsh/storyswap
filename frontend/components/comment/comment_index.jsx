import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentIndexItem from './comment_index_item';
import CommentForm from '../comment_form/comment_form';

class CommentIndex extends React.Component{

  constructor(props){
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments(){
    let comments = this.props.answer.comments;
    return comments.map((comment) => {
      return <CommentIndexItem key={comment.id} answer={answer} comment={comment} currentUser={this.props.currentUser} commentVotes={this.props.commentVotes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
    });
  }

  render(){
    return (
      <div id="comments-index-header">Comments:
        <div id="comments-index">
          { this.renderComments() }
        </div>
        <CommentForm postComment={this.props.postComment} currentUser={this.props.currentUser} errors={this.props.commentErrors}/>
      </div>
    );
  }

}

export default withRouter(CommentIndex);
