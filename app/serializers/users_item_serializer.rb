class UsersItemSerializer < ActiveModel::Serializer
  attributes :id, :user, :item, :show_age
end
