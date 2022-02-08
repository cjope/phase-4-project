class User < ApplicationRecord
    has_secure_password
    

    validates :username, presence: true, uniqueness: true

    has_many :users_items, dependent: :destroy
    has_many :items, through: :users_items

    def total
        user = User.find_by(id: session[:user_id])
        render json:user.items.sum(:price)
    end

    # def password=(new_password)
    #     self.password_digest = pass_hash(new_password)
    # end
     
    # def authenticate(password)
    #     return nil unless pass_hash(password) == password_digest
    #     self
    # end

    # private

    # def pass_hash(input)
    #     input.bytes.reduce(:+)
    # end

end
