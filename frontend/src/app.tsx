import React from 'react';
import { AppRoute } from 'common/enums';
import SignUpPage from 'pages/auth/sign-up/sign-up.page';
import { HomePage } from 'pages/home/home.page';
import { Switch, Route } from 'react-router-dom';
import SignIn from 'pages/auth/signIn/signIn';
import MultipleRange from 'components/common/rangeMultiple/rangeMutiple';


const App: React.FC = () => {
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(1000);
  const [price, setPrice] = React.useState({});

  function handlerRange(value:{min:number, max:number}) {

    console.log(value);

    setPrice(value);

  }

  return (
    <>
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
      </Switch>
      <div className='m-auto mt-90 w-1/2 '>
        <MultipleRange min={min} max={max} onChange={({min, max}) => handlerRange({min, max})}/>
      </div>
      
    </>
  )
};

export default App
