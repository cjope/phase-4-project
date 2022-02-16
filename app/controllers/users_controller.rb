class UsersController < ApplicationController

  skip_before_action :authorize
  
  def create
    user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
  end

  def index
    render json: User.all
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  def update
    user = User.find_by(id: session[:user_id])
    user.update!(user_params)
    render json: user, status: :ok
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    user.destroy
    head :no_content
  end

  def total
    total = User.find_by(id: session[:user_id])
    render json:total.items.sum(:price).round(2)
  end

  private

    def user_params
      params.permit(:username, :password, :password_confirmation, :img_url)
    end

end