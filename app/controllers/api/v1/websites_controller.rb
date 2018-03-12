
class Api::V1::WebsitesController < ApplicationController
  def index
    products = Product.all
    all_products_price_display = []
    products.each do |product|
      amazon_agent = Mechanize.new
      amazon_page = amazon_agent.get("https://www.amazon.com/Safety-1st-Grow-Convertible-Everest/dp/#{product.amazon_asin}")
      amazon_price = amazon_page.css('#priceblock_ourprice').text.delete('$ ,')
      last_amz_price = Price.create(price_amt: amazon_price.to_f, product: product, website_id: 1)

      walmart_agent = Mechanize.new
      walmart_page = walmart_agent.get("https://www.walmart.com/ip/Safety-1-Safety-Essentials-Kit-46-Pcs-White/#{product.walmart_id}")
      walmart_price = walmart_page.css('.Price-group')[0].text.delete('$ ,')

      last_walmart_price = Price.create(price_amt: walmart_price.to_f, product: product, website_id: 2)
      last_scrape = Scrape.create(product: product, walmart_price_amt: last_walmart_price.price_amt, walmart_price_id: last_walmart_price.id, amazon_price_amt: last_amz_price.price_amt, amazon_price_id: last_amz_price.id)
      all_products_price_display << {product_name: product.product_name, amazon_price: last_amz_price.price_amt, walmart_price: last_walmart_price.price_amt, id: product.id}
    end

    # all_products_price_display << {product_name: 'Safety1st Gate', amazon_price: 20.98, walmart_price: 20.98, id: 1}
    render json: all_products_price_display
  end
end
