import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" component={New} />
      </Switch>
    </>
  )
}
