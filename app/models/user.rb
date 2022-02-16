class User < ApplicationRecord
    has_secure_password
    

    validates :username, presence: true, uniqueness: true

    has_many :users_items, dependent: :destroy, dependent: :delete_all
    has_many :items, through: :users_items

    def total
        self.items.sum(:price).round(2)
    end

    def cart
        self.items
    end

end