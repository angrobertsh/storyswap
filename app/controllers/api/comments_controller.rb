class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(answer_id: params[:answer_id])
  end

  def create
    new_params = comment_params
    if current_user
      new_params[:user_id] = current_user.id
      new_params[:user_age] = current_user.age
      new_params[:user_location] = current_user.location
      new_params[:username] = current_user.username
    else
      new_params[:username] = "Guest"
    end
    @comment = Comment.new(new_params)
    if @comment.save
      @question = Answer.find_by_id(new_params[:answer_id]).question
      render "api/questions/show"
    else
      @errors = @comment.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :answer_id, :user_location, :user_age)
  end

end
