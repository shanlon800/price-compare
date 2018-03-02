

class Api::V1::WebsitesController < ApplicationController
  def index
    agent = Mechanize.new
    page = agent.get('https://www.amazon.com/Safety-1st-Grow-Convertible-Everest/dp/B017VNNT3I/ref=sr_1_1_sspa?ie=UTF8&qid=1519952993&sr=8-1-spons&keywords=safety+1st+car+seat&psc=1')
    page.css('#priceblock_ourprice').text
    data = [1,2,3]
    render json: data
  end
end
