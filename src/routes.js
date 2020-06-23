import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={listProducts} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes
