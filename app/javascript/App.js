import React from 'react'

import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import PriceIndexContainer from './containers/PriceIndexContainer'

const App = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={PriceIndexContainer}/>
      </Router>
    </div>
  )
}

export default App;
