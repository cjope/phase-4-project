class ItemSerializer < ActiveModel::Serializer
  attributes :id, :product, :name, :price, :age, :img_url, :show_age
end
