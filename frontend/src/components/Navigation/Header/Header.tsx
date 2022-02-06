import * as React from 'react'
import clsx from 'clsx'
import { Logo } from 'components/Navigation/LogoLink'
import { AppBar } from 'components/Navigation/AppBar'
import { SideBar } from 'components/Navigation/SideBar'

interface HederProps {
  children?: React.ReactNode
  position?: string
}

const Header: React.FC<HederProps> = ({ position, children }) => {
  return (
    <header
      className={clsx(
        'absolute top-0 min-w-full flex flex-row px justify-start items-center py-6 px-75px bg-white mx-0 my-0 shadow-header ',
        position,
      )}
    >
      {children}
      {/* <Logo /> */}
      {/* <AppBar /> */}
    </header>
  )
}

export default Header
