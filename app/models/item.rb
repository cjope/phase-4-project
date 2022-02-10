class Item < ApplicationRecord
    has_many :users_items, dependent: :destroy
    has_many :users, through: :users_items
end