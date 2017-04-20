class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ["Incorrect name or password."]
      render(
        "api/shared/error",
        status: 401
      )
    end
  end

  def destroy
    if current_user
      logout
    else
      @errors = ["Nobody is logged in!"]
      render(
        "api/shared/error",
        status: 404
      )
    end
  end

end
