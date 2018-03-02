class UpdatePriceToFloat < ActiveRecord::Migration[5.1]
  def up
    change_column :prices, :price_amt, :float, null: false
  end
  def down
    change_column :prices, :price_amt, :integer, null: false
  end
end
