class SessionsController < ApplicationController
  
  def create
      user = User.find_by(username: params[:username])
      session[:user_id] = user.id
      render json: user
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
    
end





















# class SessionsController < ApplicationController
  
#   skip_before_action :authorize, only: :create

#     # def create
#     #     user = User.find_by(username: params[:username])
#     #     session[:user_id] = user.id
#     #     render json: user
#     #   end
    
#       # def create
#       #   user = User.find_by(username: params[:username])
#       #   if params[:password] == user.password
#       #     session[:user_id] = user.id
#       #     render json: user, status: :created
#       #   else
#       #     render json: { error: "Invalid username or password" }, status: :unauthorized
#       #   end
#       #  end

#        def create
#         user = User.find_by(username: params[:username])
#         if user&.authenticate(params[:password])
#           session[:user_id] = user.id
#           render json: user, status: :created
#         else
#           render json: { errors: "Invalid username or password" }, status: :unauthorized
#         end
#       end



#       def destroy
#         session.delete :user_id
#         head :no_content
#       end
      
# end


class SessionsController < ApplicationController
  # before_action :authorize, only: :create

  def create
    user = User.find_by(username: params[:username])
    # if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    # else
    #   render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    # end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end