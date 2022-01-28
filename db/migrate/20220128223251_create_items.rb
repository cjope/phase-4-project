class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :product
      t.string :name
      t.float :price
      t.date :age
      t.string :img_url

      t.timestamps
    end
  end
end
