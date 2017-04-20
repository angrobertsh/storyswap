import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentForm from '../comment_form/comment_form';
import CommentIndex from '../comment/comment_index';

class AnswerIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComments: false
    }
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(e){
    let vote = {vote: {votable_id: this.props.answer.id, votable_type: "Answer", value: 1}};
    let userVotes = this.props.answerVotes;
    let found = userVotes.find((el) => {return el.votable_id === vote.votable_id;})
    if(found){
      if(found.value === 1){
        vote["vote"]["value"] = 0;
      }
      this.props.editUpvote(vote);
    } else {
      this.props.upvote(vote);
    }
  }

  render(){
    let answer = this.props.answer

    return (
      <div className="answer">
        <div className="answer-body">
          { answer.body }
        </div>
        <div className="answer-author">
          <div className="answer-author-info answer-author-username">
            { answer.username }
          </div>
          <div className="answer-author-info answer-author-location">
            { answer.user_location }
          </div>
          <div className="answer-author-info answer-author-location">
            { answer.user_age }
          </div>
        </div>
        <div className="answer-interactions">
          <div className="answer-upvote">Heart</div>
          <div className="answer-comments">Comments</div>
          <div className="answer-share">Share</div>
        </div>
        <div className="answer-comments">
        </div>
      </div>
    );
  }
};


export default withRouter(AnswerIndexItem);
