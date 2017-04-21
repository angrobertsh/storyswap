class Api::VotesController < ApplicationController

  before_action :ensure_logged_in, only: [:index]

  def index
    @answer_votes = Vote.where(user_id: current_user.id, votable_type: "Answer")
    @question_votes = Vote.where(user_id: current_user.id, votable_type: "Question")
    @comment_votes = Vote.where(user_id: current_user.id, votable_type: "Comment")
  end

  def create
    new_params = vote_params
    new_params[:user_id] = current_user.id
    @vote = Vote.new(new_params)
    if @vote.save
      render_question
    else
      @errors = @vote.errors.full_messages
      render_errors(@errors)
    end
  end

  def update
    new_params = vote_params
    new_params[:user_id] = current_user.id
    @vote = Vote.find_by_votable_type_and_votable_id_and_user_id(vote_params[:votable_type], vote_params[:votable_id], current_user.id)
    if @vote.value == new_params[:value].to_i
      new_params[:value] = 0
    end
    if @vote.update(new_params)
      render_question
    else
      @errors = @vote.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:value, :votable_id, :votable_type)
  end

  def ensure_logged_in
    if logged_in? == false
      @errors = ["Please log in to upvote."]
      render "api/shared/error"
    end
  end

  def render_question
    if vote_params[:votable_type] == "Answer"
      @question = Answer.find_by_id(vote_params[:votable_id]).question
    elsif vote_params[:votable_type] == "Comment"
      @question = Comment.find_by_id(vote_params[:votable_id]).question
    else
      @question = Question.find_by_id(vote_params[:votable_id])
    end
    render "api/questions/show"
  end


end
