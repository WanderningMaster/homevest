import * as React from 'react'
import { useState } from 'react'
import { Header } from 'components/Navigation/Header'
import { SideBar } from 'components/Navigation/SideBar'
import { Logo } from 'components/Navigation/Logo'
import { AppBar } from 'components/Navigation/AppBar'

export const HomePage: React.FC = () => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(true)
  }
  return (
    <>
      {active ? (
        <>
          <SideBar />
          <Header position="left-72 justify-start py-8 pl-110px ">
            <AppBar button={false} />
          </Header>
        </>
      ) : (
        <>
          <Header position="left-0 justify-center py-6 px-75px">
            <Logo onClick={onClick} />
            <AppBar button={true} />
          </Header>
        </>
      )}
    </>
  )
}
