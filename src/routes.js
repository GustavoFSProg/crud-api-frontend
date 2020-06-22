import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={listProducts}></Route>
      </Switch>
    </BrowserRouter>
  )
}
