class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :img_url,  :users_items, :total, :cart
  # , :users_items
  # . :items
end
