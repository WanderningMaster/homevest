import { AccountSettingsPage } from 'pages/settings/account-settings/account-settings.page'
import PropertyDevelopersPage from 'pages/property-developers/property-developers.page'
import { DashboardMapPage } from 'pages/dashboard-map/dashboard-map.page'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoute } from 'common/enums'
import SignUpPage from 'pages/auth/sign-up/sign-up.page'
import { HomePage } from 'pages/home/home.page'
import { ApartmentPage } from 'pages/apartment/apartment-page'
import { Switch, Route } from 'react-router-dom'
import SignIn from 'pages/auth/signIn/signIn'
import ForgotPassword from 'pages/auth/forgot-password/forgot-password.page'

import { UserActionCreator } from 'store/user/user'
import VerifyEmail from 'pages/auth/verify-email/verify-email.page'
import { RootState } from 'common/types'
import { DashboardMakeInvestmentPage } from 'pages/dashboard-make-investment/dashboard-make-investment-page'


const App: React.FC = () => {
  const { users } = useSelector(({ users }: RootState) => ({
    users,
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({ type: UserActionCreator.asyncCheckAuthSaga().type });
    }
  }, [])
  const isAuth = users.isAuth
  return (
    <Switch>
      <Route path={AppRoute.SIGN_UP}>{isAuth ? <HomePage /> : <SignUpPage />}</Route>
      <Route path={AppRoute.SIGN_IN}>{isAuth ? <HomePage /> : <SignIn />}</Route>
      <Route exact path={AppRoute.ROOT}>
        {isAuth ? <HomePage /> : <SignIn />}
      </Route>
      <Route exact path={AppRoute.FORGOT_PASSWORD}>
        <ForgotPassword />
      </Route>
      <Route exact path={AppRoute.VERIFY_EMAIL}>
        <VerifyEmail />
      </Route>
      <Route exact path={AppRoute.SETTINGS_APARTMENT}>
        <ApartmentPage />
      </Route>
      <Route path={AppRoute.ACCOUNT_SETTINGS}>
        <AccountSettingsPage />
      </Route>
      {/* <Route path={AppRoute.ROOT}>
        <HomePage />
      </Route> */}
      <Route exact path={AppRoute.NEW_BUILDINGS}>
        <PropertyDevelopersPage />
      </Route>
      <Route path={AppRoute.MAP}>
        <DashboardMapPage />
      </Route>
      <Route path={AppRoute.MAKE_INVESTMENT}>
        <DashboardMakeInvestmentPage />
      </Route>
    </Switch>
  )
}


export default App
