import React from 'react';
import { Link, withRouter } from 'react-router';
import CommentIndexContainer from '../comment/comment_index_container';

class AnswerIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComments: false
    }
    this.handleVote = this.handleVote.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.checkAge = this.checkAge.bind(this);
  }

  handleVote(e){
    if(this.props.currentUser){
      let vote = {votable_id: this.props.answer.id, votable_type: "Answer", value: 1};
      let userVotes = this.props.votes.answerVotes;
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
      alert("Please log in to like answers");
    }
  }

  toggleComments(e){
    this.setState({showComments: !this.state["showComments"]});
  }

  renderComments(){
    if(this.state["showComments"]){
      return (<CommentIndexContainer answer={this.props.answer} />);
    } else {
      return;
    }
  }

  checkAge(answer){
    if(answer.user_age){
      return (<div className="answer-author-info answer-author-age">
        Age { answer.user_age }
      </div>)
    } else {
      return (<div className="answer-author-info answer-author-age">
      </div>)
    }
  }

  render(){
    let answer = this.props.answer
    let comments = this.renderComments();
    let numHearts = 0;
    this.props.answer.votes.forEach((el) => {
      numHearts += el.value;
    });
    if(numHearts === 1){
      numHearts = numHearts.toString() + " Heart";
    } else {
      numHearts = numHearts.toString() + " Hearts";
    }
    let age = this.checkAge(answer);

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
          { age }
        </div>
        <div className="answer-interactions">
          <div className="answer-upvote" onClick={this.handleVote}> { numHearts } </div>
          <div className="answer-comments" onClick={this.toggleComments} > { answer.comments.length } Comments</div>
        </div>
        <div className="answer-comments">
          { comments }
        </div>
      </div>
    );
  }
};


export default withRouter(AnswerIndexItem);
