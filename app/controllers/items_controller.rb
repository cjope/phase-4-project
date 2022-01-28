class ItemsController < ApplicationController

    def show
        render json: Item.all
    end

end
