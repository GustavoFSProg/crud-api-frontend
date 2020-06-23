import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/"  component={Home}></Route>
          <Route path="/list"  exact component={listProducts}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
