import * as React from 'react'
import clsx from 'clsx'

interface HederProps {
  children?: React.ReactNode
  position?: string
}

const Header: React.FC<HederProps> = ({ position, children }) => {
  return (
    <header
      className={clsx(
        'absolute top-0 min-w-full flex flex-row justify-start items-center py-8 px-75px bg-white mx-0 my-0 shadow-header ',
        position,
      )}
    >
      {children}
    </header>
  )
}

export default Header
