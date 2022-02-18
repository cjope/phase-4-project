class UsersItemsController < ApplicationController

    def index
        render json: UsersItem.all
    end

    def show
      cart = UsersItem.where(user_id: session[:user_id])
      render json: cart
    end
    
    def create
      render json: UsersItem.create!(user_id: session[:user_id], item_id: params[:item_id])
    end

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

end