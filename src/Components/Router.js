import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Main from '../Pages/Main/Main'
import Arithmetics from '../Pages/Arithmetics/Arithmetics'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/arithmetics" component={Arithmetics} />
    </Switch>
  </BrowserRouter>
)
export default Router
