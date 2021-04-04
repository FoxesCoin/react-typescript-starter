import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LogIn } from 'screens/log-in';

import { ROUTES } from 'constants/router';

import { GlobalStyles } from 'style/global';
import 'style/reset.css';

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path={ROUTES.START} component={LogIn} />
      </Switch>
    </Router>
  </>
);
