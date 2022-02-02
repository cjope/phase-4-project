class ItemsController < ApplicationController

    def show
        user = User.find_by(id: session[:user_id])
        render json: user.items
      end
      
end
