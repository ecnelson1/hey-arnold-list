import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeyContainer from '../../containers/HeyContainer';
import DetailsContainer from '../../containers/DetailsContainer'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
        exact path='/' 
        component={HeyContainer}/>

        <Route 
        exact path='/:id' 
        render={(props) => (
          <DetailsContainer {...props}/>
        )}
        />
      </Switch>
    </Router>
  )
}
