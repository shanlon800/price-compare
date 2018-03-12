import React, { Component } from 'react';
import moment from 'moment';
import { Chart } from 'react-google-charts';

class ProductPricingChartContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      options: {
        title: 'Pricing Data Over Time',
        hAxis: { title: 'Date', minValue: 0, maxValue: 50 },
        vAxis: { minValue: 0, maxValue: 50 },
        vAxis: { title: 'Price in $', minValue: 0, maxValue: 50},
        legend: 'true',
        pointSize: 5,
      },
      data: [
        ['Date', 'Walmart Price', 'Amazon Price'],
        ['May 5 2018', 12, 16],
        ['May 6 2018', 5.5, 10],
        ['May 7 2018', 14, 7],
        ['May 8 2018', 5, 13],
        ['May 9 2018', 3.5, 7],
        ['May 10 2018', 7, 3],
      ],
    }
  }

  render(){
    let chartArray = [['Date', 'Walmart price', 'Amazon Price']]
    this.props.pricingData.forEach(scrape => {
      let chartScrape = []
      chartScrape.push(moment(scrape.created_at).format("MM/DD/YY"))
      chartScrape.push(scrape.walmart_price_amt)
      chartScrape.push(scrape.amazon_price_amt)
      chartArray.push(chartScrape)
    })

    return(
      <Chart
        chartType="LineChart"
        data={chartArray}
        options={this.state.options}
        graph_id="LineChart1"
        width="90%"
        height="30rem"
        legend_toggle
      />
    )
  }
}

export default ProductPricingChartContainer;
