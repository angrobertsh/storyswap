class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find_by_id(params[:id])
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render "api/questions/show"
    else
      @errors = @question.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def question_params
    params.require(:question).permit(:title, :description)
  end

end
