import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import path from 'path'
import listProducts from './pages/listProducts'

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list" component={listProducts}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
