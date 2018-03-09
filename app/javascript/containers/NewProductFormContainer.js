import React, { Component } from 'react';
import TextField from '../components/TextField'

class NewProductFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProductName: '',
      newProductAsin: '',
      newProductWalmartId: '',
      newUpc: '',
      errors: []
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAsinChange = this.handleAsinChange.bind(this);
    this.handleWalmartIdChange = this.handleWalmartIdChange.bind(this);
    this.handleUpcChange = this.handleUpcChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  clearErrors() {
    this.setState({errors: []})
  }

  handleNameChange(event){
    let newProductName = event.target.value
    this.setState({newProductName: newProductName})
  }
  handleAsinChange(event){
    let newProductAsin = event.target.value
    this.setState({newProductAsin: newProductAsin})
  }
  handleWalmartIdChange(event){
    let newWalmartId = event.target.value
    this.setState({newProductWalmartId: newWalmartId})
  }
  handleUpcChange(event){
    let newUpc = event.target.value
    this.setState({newUpc: newUpc})
  }

  handleSubmit(event){
    event.preventDefault()
    let errors = this.validateField('newProductName', 'Product Name')
    errors = errors.concat(this.validateField('newProductAsin', 'ASIN'))
    errors = errors.concat(this.validateField('newProductWalmartId', 'Walmart Id'))
    if (errors.length === 0){
      let formPayload = {
        product_name: this.state.newProductName,
        amazon_asin: this.state.newProductAsin,
        walmart_id: this.state.newProductWalmartId,
        upc: this.state.newUpc
      }
      this.props.addNewProduct(formPayload)
    } else {
      this.setState({errors: errors})
    }
  }

  validateField(fieldName, messageName){
    if (this.state.fieldName === ''){
      return `Please enter the ${messageName}`
    } else {
      return []
    }
  }

  render(){
    return(
      <div>
        <div>
          <TextField
            label='Product Name'
            handleChange={this.handleNameChange}
            name={this.newProductName}
            content={this.state.newProductName}
          />
        </div>
        <div>
          <TextField
            label='ASIN'
            handleChange={this.handleAsinChange}
            name={this.newProductAsin}
            content={this.state.newProductAsin}
          />
        </div>
        <div>
          <TextField
            label='Walmart Id'
            handleChange={this.handleWalmartIdChange}
            name={this.newProductWalmartId}
            content={this.state.newProductWalmartId}
          />
        </div>
        <div>
          <TextField
            label='UPC'
            handleChange={this.handleUpcChange}
            name={this.newUpc}
            content={this.state.newUpc}
          />
        </div>
        <button id="add-new-product-button" type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default NewProductFormContainer;
