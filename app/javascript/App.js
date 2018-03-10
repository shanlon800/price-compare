import React from 'react'

import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PriceIndexContainer from './containers/PriceIndexContainer'
import ProductShowContainer from './containers/ProductShowContainer'

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={PriceIndexContainer}/>
        <Route path='/products/:id' component={ProductShowContainer} />
      </Router>
    </div>
  )
}

export default App;
