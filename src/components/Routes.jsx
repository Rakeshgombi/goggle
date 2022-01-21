import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/">
        <Redirect to="/goggle/search" />
      </Route>
      <Route exact path="/goggle">
        <Redirect to="/goggle/search" />
      </Route>
      <Route exact path="/goggle/search">
        <Results />
      </Route>
      <Route path="/goggle/images">
        <Results />
      </Route>
      <Route path="/goggle/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

    </Switch>
  </div>

);