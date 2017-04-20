class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :location, :age, :url)
  end

end
