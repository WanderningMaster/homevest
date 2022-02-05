import * as React from 'react'
import { Logo } from 'components/Navigation/LogoLink'
import { AppBar } from 'components/Navigation/AppBar'
import SideBar from '../SideBar/SideBar'

const Header: React.FC = () => {
  return (
    <header className="absolute min-w-full flex flex-row px justify-start items-center py-6 px-75px bg-white mx-0 my-0 shadow-header ">
      <Logo />
      <AppBar />
    </header>
  )
}

export default Header
