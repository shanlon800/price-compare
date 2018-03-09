import React, { Component } from 'react';

import PriceDisplayTile from '../components/PriceDisplayTile';
import NewProductFormContainer from './NewProductFormContainer'

class PriceIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.addNewProduct = this.addNewProduct.bind(this)
  }


  addNewProduct(formPayload) {
  fetch('/api/v1/products', {
    credentials: 'same-origin',
    method: 'POST',
    body: JSON.stringify(formPayload),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    let existingProducts = this.state.products
    let includeNewProduct = existingProducts.concat(body)
    this.setState({
      products: includeNewProduct
    })
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  componentWillMount() {
  fetch('/api/v1/websites')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        products: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let products = this.state.products.map(product => {
      return(
        <PriceDisplayTile
          name={product.product_name}
          amzPrice={product.amazon_price}
          walmartPrice={product.walmart_price}
          key={product.id}
        />
      )
    })
    return(
      <div>
        <h1>List of Products</h1>
        <div id='flex-grid'>
        <div className='product-display-container'>
          <div className='product-name'>Product Name</div>
          <div className='amazon-price'>Amazon Price</div>
          <div className='walmart-price'>Walmart Price</div>
        </div>
          {products}
        </div>
        <div id='new-product-form'>
          <NewProductFormContainer
            addNewProduct={this.addNewProduct}
          />
        </div>
      </div>
    )
  }
}

export default PriceIndexContainer;
