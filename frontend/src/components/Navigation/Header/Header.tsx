import * as React from 'react'
import clsx from 'clsx'

interface HederProps {
  children?: React.ReactNode
  position?: string
  width?: string
}

const Header: React.FC<HederProps> = ({ position, width, children }) => {
  return (
    <header
      className={clsx(
        'absolute top-0 w-full flex flex-row  items-center   bg-white mx-0 my-0 shadow-header h-96px transition-all ',
        position,
      )}
    >
      <div className={clsx('flex items-center justify-between', width)}>{children}</div>
    </header>
  )
}

export default Header
