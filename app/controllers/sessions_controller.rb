class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username].downcase)
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  def total
    total = User.find_by(id: session[:user_id])
    render json:total.items.sum(:price).round(2)
  end

end