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

      def create
        user = User.find_by(user_id: session[:user_id])
        item = Item.find(params[:id])
        render json: UsersItem.create!(user_id:user.id, item_id:item.id)
      end

end
