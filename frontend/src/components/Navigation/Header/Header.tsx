import * as React from 'react'
import Logo from '../Logo/Logo'

import TopNavigationBar from 'components/Navigation/TopBar/TopBar'

const Header: React.FC = () => {
  return (
    <header className="container absolute min-w-full items-center py-6 px-20 flex bg-white mx-0 my-0 justify-between shadow-md ">
      <Logo />
      <TopNavigationBar />
    </header>
  )
}

export default Header
