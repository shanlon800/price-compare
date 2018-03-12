# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180312005921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "prices", force: :cascade do |t|
    t.float "price_amt", null: false
    t.bigint "product_id"
    t.bigint "website_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_prices_on_product_id"
    t.index ["website_id"], name: "index_prices_on_website_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "product_name", null: false
    t.string "amazon_asin"
    t.string "walmart_id"
    t.string "upc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scrapes", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.float "amazon_price_amt"
    t.integer "amazon_price_id"
    t.float "walmart_price_amt"
    t.integer "walmart_price_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["amazon_price_id"], name: "index_scrapes_on_amazon_price_id", unique: true
    t.index ["product_id"], name: "index_scrapes_on_product_id"
    t.index ["walmart_price_id"], name: "index_scrapes_on_walmart_price_id", unique: true
  end

  create_table "websites", force: :cascade do |t|
    t.string "website_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
