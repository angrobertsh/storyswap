import React from 'react';
import { Link, withRouter } from 'react-router';
import AnswerIndexItem from '../answer/answer_index_item';

class AnswerForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      body: "",
      user_location: "",
      user_age: "",
      question_id: parseInt(this.props.params.id)
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.guestBox = this.guestBox.bind(this);
    this.formOrThanks = this.formOrThanks.bind(this);
  }

  update(field){
		return e => {this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmit(e){
		e.preventDefault();
    let answer = this.state;
    if(parseInt(answer["user_age"])){
      answer["user_age"] = parseInt(answer["user_age"]);
    } else {
      answer["user_age"] = null;
    }
    this.props.postAnswer(answer);
	}

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className="answer-error">
						{error}
					</li>
				))}
			</ul>
		);
	}

  guestBox(){
    if(Boolean(this.props.currentUser)){
      return;
    } else {
      return (
        <div className="answer-guest-inputs">
          <input type="text" onChange={this.update("user_location")} value={this.state.user_location} className="answer-input" placeholder="Location"/>
          <input type="text" onChange={this.update("user_age")} value={this.state.user_age} className="answer-input" placeholder="Age (optional)"/>
        </div>
      )
    }
  }

  formOrThanks(){
    let question;
    let title;
    if(this.props.questions[this.props.params.id]){
      question = this.props.questions[this.props.params.id]
      title = question.title
    }

    if(this.props.answers && question){
      if(Object.keys(this.props.answers).includes(this.props.params.id)){
        if(question.answers){
          if(question.answers.length === 1){
            return (
              <div className="answer-thanks">
                <div className="answer-thanks-title">Thanks for sharing! You were the first to answer this question!</div>
                <Link to={`question`}><button className="answer-index-button">More Questions</button></Link>
                <Link to={`question/${this.props.params.id}`}><button className="more-button">See Your Answer</button></Link>
              </div>
            );
          } else {
            let rand = Math.floor(Math.random()*question.answers.length);
            let answer = question.answers[rand]
            return (
              <div className="answer-thanks">
                <div className="answer-thanks-title">Thanks for sharing! Check out how someone else has answered:</div>
                <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} answerVotes={this.props.answerVotes} upvote={this.props.upvote} editUpvote={this.props.editUpvote}/>
                <Link to={`question/${this.props.params.id}`}><button className="more-button">See Answers</button></Link>
              </div>
            );
          }
        }
      } else {
        const location = this.guestBox();
        return (
          <div className="answer-form-container">
    				<form onSubmit={this.handleSubmit} className="answer-form">
              <span className="answer-form-title"> { title } </span>
              <span className="answer-errors errors">{ this.renderErrors() }</span>
              <div className="answer-input-container">
                <textarea onChange={this.update("body")} value={this.state.body} className="answer-input-body" placeholder="Your Story (200 character minimum)"/>
                { location }
                <button className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        );
      }
    }
  }

  render() {
    let display = this.formOrThanks();
    return (
      <div className="form-or-thanks-container">
        { display }
      </div>
    );
  }

}

export default withRouter(AnswerForm);
