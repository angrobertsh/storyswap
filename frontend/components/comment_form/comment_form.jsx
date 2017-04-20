import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component{

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
    this.getGuestInputs = this.getGuestInputs.bind(this);
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  handleSubmit(e){
		e.preventDefault();
    let comment = this.state;
    if(parseInt(comment["user_age"])){
      comment["user_age"] = parseInt(comment["user_age"]);
    } else {
      comment["user_age"] = null;
    }
    this.props.postComment(comment);
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

  getGuestInputs(){

  }

  render() {
    guestInputs = this.getGuestInputs();
    return (
      <div className="comment-form-container">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <span className="comment-errors">{ this.renderErrors() }</span>
          <div className="comment-input">
            { guestInputs }
            <input type="text" onChange={this.update("body")} value={this.state.body} className="comment-input" placeholder="Comment"/>
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(CommentForm);
