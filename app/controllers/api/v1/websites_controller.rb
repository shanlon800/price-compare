class Api::V1::WebsitesController < ApplicationController
  def index
    data = [1,2,3]
    render json: data
  end
end
