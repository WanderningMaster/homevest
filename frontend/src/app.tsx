import React from 'react';
import { AppRoute } from 'common/enums';
import SignUpPage from 'pages/auth/sign-up/sign-up.page';
import { HomePage } from 'pages/home/home.page';
import { Switch, Route } from 'react-router-dom';
import SignIn from 'pages/auth/signIn/signIn';
import { AccountSettingsPage } from 'pages/settings/account-settings/account-settings.page';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path={AppRoute.SIGN_UP}>
        <SignUpPage />
      </Route>
      <Route path={AppRoute.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={AppRoute.ROOT}>
        <HomePage />
      </Route>
      <Route path={AppRoute.ACCOUNT_SETTINGS}>
        <AccountSettingsPage />
      </Route>
    </Switch>
  )
};

export default App
