import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LogIn } from 'screens/log-in';
import { Page404 } from 'screens/page-404';

import { ROUTES } from 'constants/router';

import { GlobalStyles } from 'style/global';
import 'style/reset.css';

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path={ROUTES.START} component={LogIn} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  </>
);
