import React from 'react';
import { AppRoute } from 'common/enums';
import SignUpPage from 'pages/auth/sign-up/sign-up.page';
import { HomePage } from 'pages/home/home.page';
import { Switch, Route } from 'react-router-dom';
import { DashboardMapPage } from 'pages/dashboard-map/dashboard-map.page';
import SignIn from 'pages/auth/signIn/signIn';
import ForgotPassword from 'pages/auth/forgot-password/forgot-password.page';
import { DashboardMakeInvestmentPage } from 'pages/dashboard-make-investment/dashboard-make-investment-page';


const App: React.FC = () => {
  return (
    <Switch>
      <Route path={AppRoute.SIGN_UP}>
        <SignUpPage />
      </Route>
      <Route path={AppRoute.SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={AppRoute.FORGOT_PASSWORD}>
        <ForgotPassword />
      </Route>
      <Route exact path={AppRoute.ROOT}>
        <HomePage />
      </Route>
      <Route path={AppRoute.MAP}>
        <DashboardMapPage />
      </Route>
      <Route path={AppRoute.MAKE_INVESTMENT}>
        <DashboardMakeInvestmentPage />
      </Route>
    </Switch>
  )
};

export default App
