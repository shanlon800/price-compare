import React, { Component } from 'react';

import PriceDisplayTile from '../components/PriceDisplayTile';
import NewProductFormContainer from './NewProductFormContainer'

class PriceIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
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
        <NewProductFormContainer/>
      </div>
    )
  }
}

export default PriceIndexContainer;
