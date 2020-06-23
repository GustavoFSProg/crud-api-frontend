import React from 'react'
import { Route, Switch, BrowserRouter, useHistory } from 'react-router-dom'
import Home from './pages/home'
import listProducts from './pages/listProducts'

const { push } = useHistory()

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route {...push('/list')} component={listProducts}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}
