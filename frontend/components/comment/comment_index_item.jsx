import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trigger: true
    }
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(e){
    if(this.props.currentUser){
      let vote = {votable_id: this.props.comment.id, votable_type: "Comment", value: 1};
      let userVotes = this.props.votes.commentVotes;
      let found = userVotes.find((el) => {return el.votable_id === vote.votable_id;})
      if(found){
        if(found.value === 1){
          vote["value"] = 0;
        }
        this.props.editUpvote(vote);
      } else {
        this.props.upvote(vote);
      }
    } else {
      alert("Please log in to like comments.")
    }
  }

  render(){
    let comment = this.props.comment
    let numHearts = 0;
    this.props.comment.votes.forEach((el) => {
      numHearts += el.value;
    });
    let age;
    if(comment.user_age){
      age = "Age " + comment.user_age
      age = (
        <div className="comment-author-info">
          { comment.username + ", " + comment.user_location + ', ' + age }
        </div>)
      } else {
      age = (
        <div className="comment-author-info">
          { comment.username + ", " + comment.user_location }
        </div>
      )
    }

    return (
      <div className="comment">
        <div className="comment-body">
          { comment.body }
        </div>
        <div className="comment-info">
          <div className="comment-author">
            { age }
          </div>
          <div className="comment-interactions">
            <div className="comment-upvote" onClick={ this.handleVote }> { numHearts } Hearts </div>
          </div>
        </div>
      </div>
    );
  }
};


export default withRouter(CommentIndexItem);
