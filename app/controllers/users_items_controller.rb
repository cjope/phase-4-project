class UsersItemsController < ApplicationController

  skip_before_action :authorize

    def index
        render json: UsersItem.all
    end

    def show
      cart = UsersItem.where(user_id: session[:user_id])
      render json: cart
    end
    # move to User?

    # def total
    #   total = User.find_by(id: session[:user_id])
    #   render json:total.items.sum(:price).round(2)
    # end

      def destroy
        item = UsersItem.find(params[:id])
        item.delete
        head :no_content
      end

      def checkout
        items = UsersItem.where(user_id: session[:user_id])
        items.delete_all
        head :no_content
      end

      def create
        render json: UsersItem.create!(user_id: session[:user_id], item_id: params[:item_id])
      end
end