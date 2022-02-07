import * as React from 'react'
import { useState } from 'react'
import { Header } from 'components/Navigation/Header'
import { SideBar } from 'components/Navigation/SideBar'
import { Logo } from 'components/Navigation/Logo'
import { AppBar } from 'components/Navigation/AppBar'

import { useLocation } from 'react-router-dom'
import { AppRoute } from 'common/enums'
import Counter from 'components/counter/counter'
import { Link } from 'components/common'
import logo from 'assets/images/logo.svg'

const App: React.FC = () => {
  const { pathname } = useLocation()
  // const [active, setActive] = useState(false)

  // const onClick = () => {
  //   setActive(true)
  // }
  return (
    <>
      {/* {active ? (
        <>
          <SideBar />
          <Header position="left-72">
            <AppBar />
          </Header>
        </>
      ) : (
        <>
          <Header position="left-0">
            <Logo onClick={onClick} />
            <AppBar />
          </Header>
        </>
      )} */}

      <div className="App">
        <div>
          <h2 className="text-h2 text-bold text-gray text-light-grey">Test Tailwind</h2>
          <ul className="App-navigation-list">
            <li>
              <Link to={AppRoute.ROOT}>Root</Link>
            </li>
            <li>
              <Link to={AppRoute.SIGN_IN}>Sign in</Link>
            </li>
            <li>
              <Link to={AppRoute.SIGN_UP}>Sign up</Link>
            </li>
          </ul>
          <p>Current path: {pathname}</p>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </>
  )
}

export default App
