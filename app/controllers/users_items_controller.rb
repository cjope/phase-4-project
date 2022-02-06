class UsersItemsController < ApplicationController


    def index
        render json: UsersItem.all
    end

    def show
        # user = User.find_by(id: session[:user_id])
        cart = UsersItem.where(user_id: session[:user_id])
        render json: cart
      end

      # def cartitem
      #   user = User.find_by(id: session[:user_id])
      #   item = Item.find_by(id: params[:id])
      #   # item = UsersItem.where(user_id: session[:user_id], item_id: params[:item_id])
      #   render json: item
      # end



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
  

      # def show
      #   cart = User.find_by(id: session[:user_id])
      #   render json: user.users_items
      # end

      def create
        render json: UsersItem.create!(user_id: session[:user_id], item_id: params[:item_id])
        # pp item
      end
end
