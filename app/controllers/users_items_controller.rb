class UsersItemsController < ApplicationController

    def index
        render json: UsersItem.all
    end

    def show
        cart = UsersItem.where(user_id: session[:user_id])
        render json: cart
      end

      def total
        total = User.find_by(id: session[:user_id])
        render json:total.items.sum(:price).round(2)
      end

      def destroy
        item = UsersItem.find(:id)
        item.delete
        head :no_content
      end

      def destroy
        user_item = UsersItem.find_by(id: params[:id])
        if user_item
          user_item.destroy
          head :no_content
        else
          render json: { error: "Item not found" }, status: :not_found
        end
       end

      def create
        render json: UsersItem.create!(user_id: session[:user_id], item_id: params[:item_id])
      end
end
