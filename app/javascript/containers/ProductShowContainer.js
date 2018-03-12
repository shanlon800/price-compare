import React, { Component } from 'react';
import moment from 'moment';

import ProductPricingChartContainer from './ProductPricingChartContainer'

class ProductShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: '',
      priceHistory: []
    }
  }


  componentWillMount() {
  fetch(`/api/v1/products/${this.props.params.id}`)
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
        product: body.product,
        priceHistory: body.pricing_data
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    return(
      <div>
        <h1>{this.state.product.product_name}</h1>
        <ProductPricingChartContainer
          pricingData={this.state.priceHistory}
        />
      </div>
    )
  }
}

export default ProductShowContainer;
