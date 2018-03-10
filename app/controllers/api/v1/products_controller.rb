class Api::V1::ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]
  def create
    product = Product.new(product_params)
    if product.save
      render json: {product_name: product.product_name, amazon_price: 'New', walmart_price: 'New', id: product.id}
    else
      render json: { error: product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    product = Product.find(params[:id])
    price_history = Price.where(product: product)
    binding.pry
  end

  protected

  def product_params
    params.require(:product).permit(
      :product_name,
      :amazon_asin,
      :walmart_id,
      :upc
    )
  end
end
