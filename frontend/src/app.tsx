import * as React from 'react'
import { useState } from 'react'
import { Header } from 'components/Navigation/Header'
import { SideBar } from 'components/Navigation/SideBar'
import { Logo } from 'components/Navigation/Logo'
import { AppBar } from 'components/Navigation/AppBar'

const App: React.FC = () => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(true)
  }
  return (
    <>
      {active ? (
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
      )}
    </>
  )
}

export default App
