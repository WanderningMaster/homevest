import React from 'react';
import { AppRoute } from 'common/enums';
import SignUpPage from 'pages/auth/sign-up/sign-up.page';
import { HomePage } from 'pages/home/home.page';
import { Switch, Route } from 'react-router-dom';


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

export default App
