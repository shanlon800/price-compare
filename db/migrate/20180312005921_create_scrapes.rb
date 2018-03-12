class CreateScrapes < ActiveRecord::Migration[5.1]
  def change
    create_table :scrapes do |t|
      t.belongs_to :product, null: false
      t.float :amazon_price_amt
      t.integer :amazon_price_id
      t.float :walmart_price_amt
      t.integer :walmart_price_id

      t.timestamps null: false
    end
    add_index :scrapes, :amazon_price_id, unique: true
    add_index :scrapes, :walmart_price_id, unique: true
  end
end
