import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/list" exactcomponent={listProducts}></Route>
      </Switch>
    </>
  )
}
