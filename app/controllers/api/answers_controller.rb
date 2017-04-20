class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.where(id: -1)
    if logged_in?
      @answers = Answer.where(user_id: current_user.id)
    end
  end

  def show
    @answer = Answer.find_by_id(params[:id])
  end

  def create
    new_params = answer_params
    if current_user
      new_params[:user_id] = current_user.id
      new_params[:user_age] = current_user.age
      new_params[:user_location] = current_user.location
      new_params[:username] = current_user.username
    else
      new_params[:username] = "Guest"
    end
    @answer = Answer.new(new_params)
    if @answer.save
      @question = Question.find_by_id(new_params[:question_id])
      render "api/questions/show"
    else
      @errors = @answer.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:body, :question_id, :user_location, :user_age)
  end

end
