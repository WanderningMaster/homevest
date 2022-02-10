import React from 'react'
import { useState } from 'react'
import { Dashboardlayout } from 'components/layouts/dashboard-layout'
import { Header } from 'components/Navigation/Header'

import { Logo } from 'components/Navigation/Logo'
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard'
import SideBarDashboard from 'components/Navigation/SideBarDashboard/SideBarDashboard'

const PropertyDevelopersPage: React.FC = ({ children }) => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onClick} />
        <AppBarDashboard />
      </Header>
      <div className=" container min-w-full justify-center items-center">
        <Dashboardlayout title="My buildings">
          {children}

          {active && <SideBarDashboard />}
        </Dashboardlayout>
      </div>
    </>
  )
}

export default PropertyDevelopersPage
