import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Home from './pages/home'
import listProducts from './pages/listProducts'

function Routes() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={Home} />*/}
        <Route path="/" component={listProducts} />
      </Switch>
    </>
  )
}

export default Routes
