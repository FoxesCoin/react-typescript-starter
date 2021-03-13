import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from 'constants/router';

import { GlobalStyles } from 'style/global';
import '../../style/reset.css';

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path={ROUTES.START} />
      </Switch>
    </Router>
  </>
);
