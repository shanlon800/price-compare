class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.string :amazon_asin
      t.string :walmart_id
      t.string :upc

      t.timestamps null: false
    end
  end
end
