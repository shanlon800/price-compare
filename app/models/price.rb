class Price < ApplicationRecord
  belongs_to :product
  belongs_to :website

  validates :price_amt, presence: true
end
