class UsersController < ApplicationController
    before_action :authorize, only: [:show]
  
    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def index
      render json: User.all
    end
  
    def show
      user = User.find_by(id: session[:user_id])
      render json: user
    end

    # def total
    #   user = User.find_by(id: session[:user_id])
    #   render json:user.items.sum(:price)
    # end
  
    private
  
    def authorize
      return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
    end
  
    def user_params
      params.permit(:username, :password, :password_confirmation, :img_url)
    end
  
  end


  # class UsersController < ApplicationController
#   skip_before_action :authorize, only: :create
  
#     def create
#       user = User.create(user_params)
#       if user.valid?
#         session[:user_id] = user.id
#         render json: user, status: :created
#       else
#         render json: { error: user.errors.full_messages }, status: :unprocessable_entity
#       end
#     end

#     def index
#       render json: User.all
#     end
  
#     def show
#       render json: @current_user
#     end

#     def total
#       user = User.find_by(id: session[:user_id])
#       render json:user.items.sum(:price)
#     end
  
#     private
  
#     # def authorize
#     #   return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
#     # end
  
#     def user_params
#       params.permit(:username, :password, :password_confirmation, :img_url)
#     end
  
#   end


# class UsersController < ApplicationController
#   before_action :authorize, only: [:show]

#   def create
#     user = User.create(user_params)
#     if user.valid?
#       session[:user_id] = user.id
#       render json: user, status: :created
#     else
#       render json: { error: user.errors.full_messages }, status: :unprocessable_entity
#     end
#   end

#   def show
#     user = User.find_by(id: session[:user_id])
#     render json: user
#   end

#   private

#   def authorize
#     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
#   end

#   def user_params
#     params.permit(:username, :password, :password_confirmation)
#   end

# end