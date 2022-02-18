class User < ApplicationRecord
    has_secure_password

    after_initialize :init
    

    validates :username, presence: true, uniqueness: {case_sensitive: false}
    # validates :img_url, presence: true, format: {with: /\.(png|jpg)\Z/i}

    has_many :users_items, dependent: :destroy, dependent: :delete_all
    has_many :items, through: :users_items

    def total
        self.items.sum(:price).round(2)
    end

    def cart
        self.items
    end

    def init
        self.img_url = "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" if self.img_url.blank?
    end

end