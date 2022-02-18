class User < ApplicationRecord
    has_secure_password

    after_initialize :init
    before_create :downcase_name
    before_update :downcase_name
    
    validates :username, presence: true, uniqueness: {case_sensitive: false}

    has_many :users_items, dependent: :destroy, dependent: :delete_all
    has_many :items, through: :users_items

    # def total
    #     self.items.sum(:price).round(2)
    # end

    def cart
        self.items
    end

    private

    def init
        self.img_url = "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" if self.img_url.blank?
    end

    def downcase_name
        self.username = username.downcase
    end

end