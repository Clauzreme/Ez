import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Main from '../Pages/Main/Main'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
)
export default Router
