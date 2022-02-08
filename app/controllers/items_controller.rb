class ItemsController < ApplicationController

    def show
        @user = User.find_by(id: session[:user_id])
        render json: @user.items
      end

      # ^ this should probably be in the useritems?

      def supplies
        items = Item.where(product: "Accessory")
        render json: items
      end

      def plants
        items = Item.where(product: "Plant")
        render json: items
      end
      
end
