class ItemsController < ApplicationController

    def show
        user = User.find_by(id: session[:user_id])
        render json: user.items
      end

      def supplies
        items = Item.where(product: "Accessory")
        render json: items
      end

      def plants
        items = Item.where(product: "Plant")
        render json: items
      end
      
end
