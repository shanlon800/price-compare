
class Api::V1::WebsitesController < ApplicationController
  def index
    products = Product.all
    allProductsPriceDisplay = []
    products.each do |product|
      amazonAgent = Mechanize.new
      amazonPage = amazonAgent.get("https://www.amazon.com/Safety-1st-Grow-Convertible-Everest/dp/#{product.amazon_asin}")
      amazonPrice = amazonPage.css('#priceblock_ourprice').text.delete('$ ,')
      lastAmzPrice = Price.create(price_amt: amazonPrice.to_f, product: product, website_id: 1)

      walmartAgent = Mechanize.new
      walmartPage = walmartAgent.get("https://www.walmart.com/ip/Safety-1-Safety-Essentials-Kit-46-Pcs-White/#{product.walmart_id}")
      walmartPrice = walmartPage.css('.Price-group')[0].text.delete('$ ,')

      lastWalmartPrice = Price.create(price_amt: walmartPrice.to_f, product: product, website_id: 2)
      allProductsPriceDisplay << {product_name: product.product_name, amazon_price: lastAmzPrice.price_amt, walmart_price: lastWalmartPrice.price_amt}
    end
    # amzPriceList = Price.where(website_id: 1)
    # lastAmzPrice = amzPriceList.last
    # walmartPriceList = Price.where(website_id: 2)
    # lastWalmartPrice = walmartPriceList.last

    render json: allProductsPriceDisplay
  end
end
