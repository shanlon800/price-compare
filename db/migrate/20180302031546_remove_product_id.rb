class RemoveProductId < ActiveRecord::Migration[5.1]
  def up
    remove_column :websites, :product_id
  end
  def down
    add_column :websites, :product_id, :bigint, null: false
  end
end
