import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewRemedy from './pages/NewRemedy';
import EditRemedy from './pages/EditRemedy'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/remedys/new" component={NewRemedy} />
        <Route path="/remedys/edit" component={EditRemedy} />
      </Switch>
    </BrowserRouter>
  )
}