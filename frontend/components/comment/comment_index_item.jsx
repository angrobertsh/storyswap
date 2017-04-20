import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(e){
    // let vote = {vote: {votable_id: this.props.answer.id, votable_type: "Comment", value: 1}};
    // let userVotes = this.props.answerVotes;
    // let found = userVotes.find((el) => {return el.votable_id === vote.votable_id;})
    // if(found){
    //   if(found.value === 1){
    //     vote["vote"]["value"] = 0;
    //   }
    //   this.props.editUpvote(vote);
    // } else {
    //   this.props.upvote(vote);
    // }
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
        </div>
        <div className="answer-interactions">
          <div className="answer-upvote">Heart</div>
          <div className="answer-comments">Comments</div>
          <div className="answer-share">Share</div>
        </div>
        <div className="answer-comments">
          <CommentForm />
          <CommentIndex />
        </div>
      </div>
    );
  }
};


export default withRouter(CommentIndexItem);
