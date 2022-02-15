class CreateUsersItems < ActiveRecord::Migration[6.1]
  def change
    create_table :users_items do |t|
      # t.integer :user_id, null: false
      # t.integer :item_id, null: false
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
