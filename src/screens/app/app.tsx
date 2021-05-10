import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ButtonPage } from 'screens/components/button-page';
import { CheckboxPage } from 'screens/components/checkbox-page';
import { InputPage } from 'screens/components/input-page';
import { SelectorPage } from 'screens/components/selector-page';
import { LogIn } from 'screens/log-in';

import { ROUTES } from 'constants/router';

import { GlobalStyles } from 'style/global';
import 'style/reset.css';

export const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path={ROUTES.START} component={LogIn} />
        <Route path={ROUTES.INPUT} component={InputPage} />
        <Route path={ROUTES.BUTTON} component={ButtonPage} />
        <Route path={ROUTES.SELECTOR} component={SelectorPage} />
        <Route path={ROUTES.CHECKBOX} component={CheckboxPage} />
      </Switch>
    </Router>
  </>
);
