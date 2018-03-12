class Product < ApplicationRecord
  has_many :prices
  has_many :websites
  has_many :scrapes

  validates :product_name, presence: true
end
