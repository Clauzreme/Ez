import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Main from '../Pages/Main/Main'
import Arithmetics from '../Pages/Arithmetics/Arithmetics'
import Feedback from '../Pages/Feedback/Feedback'

import String from '../Pages/String/String'
import Digit from '../Pages/Digit/Digit'
import Float from '../Pages/Float/Float'
import Boolean from '../Pages/Boolean/Boolean'
import Undefined from '../Pages/Undefined/Undefined'
import Null from '../Pages/Null/Null'
import Array from '../Pages/Array/Array'
import Object from '../Pages/Object/Object'
import Set from '../Pages/Set/Set'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/arithmetics" component={Arithmetics} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/string" component={String} />
      <Route exact path="/digit" component={Digit} />
      <Route exact path="/float" component={Float} />
      <Route exact path="/boolean" component={Boolean} />
      <Route exact path="/undefined" component={Undefined} />
      <Route exact path="/null" component={Null} />
      <Route exact path="/array" component={Array} />
      <Route exact path="/object" component={Object} />
      <Route exact path="/set" component={Set} />
    </Switch>
  </BrowserRouter>
)
export default Router
