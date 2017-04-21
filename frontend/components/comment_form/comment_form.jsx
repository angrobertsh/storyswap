import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      body: "",
      user_location: "",
      user_age: "",
      answer_id: 0
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
    comment["answer_id"] = this.props.answerId;
    this.props.postComment(comment);
	}

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className="comment-error">
						{error}
					</li>
				))}
			</ul>
		);
	}

  getGuestInputs(){
    <div className="comment-guest-inputs">
      <input type="text" onChange={this.update("location")} value={this.state.user_location} className="comment-input" placeholder="Location"/>
      <input type="text" onChange={this.update("user_age")} value={this.state.user_age} className="comment-input" placeholder="Age (optional)"/>
    </div>
  }

  render() {
    let guestInputs = this.getGuestInputs();
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
