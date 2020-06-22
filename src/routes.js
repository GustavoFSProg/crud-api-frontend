import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="list" component={listProducts}></Route>
      </Switch>
    </>
  )
}
