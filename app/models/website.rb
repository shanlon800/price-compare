class Website < ApplicationRecord
  has_many :prices

  validates :website_name, inclusion: { in: %w(amazon walmart)}
end
