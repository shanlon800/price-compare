import React, { Component } from 'react';
import moment from 'moment';

class ProductShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
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
        priceHistory: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){
    return(
      <h1>Hello from the Product Show Container</h1>
    )
  }
}

export default ProductShowContainer;
