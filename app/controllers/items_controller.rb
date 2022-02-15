class ItemsController < ApplicationController
  skip_before_action :authorize

      def supplies
        items = Item.where(product: "Accessory")
        render json: items
      end

      def plants
        items = Item.where(product: "Plant")
        render json: items
      end
      
end