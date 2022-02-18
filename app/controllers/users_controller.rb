class UsersController < ApplicationController
  
  def index
    render json: User.all
  end

  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => invalid
    render json: { errors: invalid.record.errors.full_messages.first }, status: :unprocessable_entity
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

  private

    def user_params
      params.permit(:username, :password, :password_confirmation, :img_url)
    end

    def user_update_params
      params.permit(:username, :img_url)
    end

end