class Product < ApplicationRecord
  has_many :prices
  has_many :websites

  validates :product_name, presence: true
end
