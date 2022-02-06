class UsersItemsController < ApplicationController


    def index
        render json: UsersItem.all
    end

    def show
        cart = User.find_by(id: session[:user_id])
        render json: cart.items
      end

      def total
        total = User.find_by(id: session[:user_id])
        render json:total.items.sum(:price).round(2)
      end
  

      # def show
      #   cart = User.find_by(id: session[:user_id])
      #   render json: user.users_items
      # end

      def create
        user = User.find_by(id: session[:user_id])
        item = Item.find_by(id: params[:item_id])
        render json: UsersItem.create!(user_id:user.id, item_id:item.id)
        # pp item
      end
end
