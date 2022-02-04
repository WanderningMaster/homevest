import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import SignUpPage from 'pages/auth/sign-up/sign-up.page';
import { HomePage } from 'pages/home/home.page';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path={AppRoute.SIGN_UP}>
        <SignUpPage />
      </Route>
      <Route exact path={AppRoute.ROOT}>
        <HomePage />
      </Route>
    </Switch>
  )
};

export default App;
