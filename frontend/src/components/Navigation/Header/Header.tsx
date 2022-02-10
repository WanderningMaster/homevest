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
        'absolute top-0 min-w-full flex flex-row  items-center   bg-white mx-0 my-0 shadow-header ',
        position,
      )}
    >
      <div className="w-1290px flex items-center ">{children}</div>
    </header>
  )
}

export default Header
