class UsersItemsController < ApplicationController


    def index
        render json: UsersItem.all
    end

    def show
        cart = UsersItem.find_by(user_id: session[:user_id])
        render json: cart
      end

      def show
        cart = User.find_by(id: session[:user_id])
        render json: user.users_items
      end

end
