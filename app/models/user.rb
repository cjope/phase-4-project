class User < ApplicationRecord
    has_secure_password
    

    validates :username, presence: true, uniqueness: true

    has_many :users_items, dependent: :destroy, dependent: :delete_all
    has_many :items, through: :users_items

    def total
        user = User.find_by(id: session[:user_id])
        render json:user.items.sum(:price)
    end

end