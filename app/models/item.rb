class Item < ApplicationRecord
    has_many :users_items, dependent: :destroy
    has_many :users, through: :users_items



    def show_age
        age = ((Date.today-self.age)/365).to_i
        year = "year".pluralize(age)
        "#{age} #{year}"
    end



end