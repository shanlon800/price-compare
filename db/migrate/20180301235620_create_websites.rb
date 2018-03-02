class CreateWebsites < ActiveRecord::Migration[5.1]
  def change
    create_table :websites do |t|
      t.string :website_name, null: false
      t.string :website_data

      t.timestamps null: false
    end
  end
end
