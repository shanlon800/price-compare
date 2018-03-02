import React, { Component } from 'react';

class PriceIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
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
      debugger
      this.setState({
        data: body
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <h1>Hello from the PriceIndexContainer</h1>
    )
  }
}

export default PriceIndexContainer;
