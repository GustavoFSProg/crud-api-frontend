import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListProducts from './pages/ListProducts'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={ListProducts} />
    </Switch>
  )
}

export default Routes
