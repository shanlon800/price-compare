class CreatePrices < ActiveRecord::Migration[5.1]
  def change
    create_table :prices do |t|
      t.integer :price_amt, null: false
      t.belongs_to :product
      t.belongs_to :website

      t.timestamps null: false
    end
  end
end
