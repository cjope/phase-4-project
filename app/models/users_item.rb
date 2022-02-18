class UsersItem < ApplicationRecord
    belongs_to :user
    belongs_to :item  


    def show_age
        self.item.show_age
    end



end