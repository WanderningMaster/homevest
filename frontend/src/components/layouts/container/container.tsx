import React from 'react'
import { Typography } from 'components/common/typography/typography'

interface LayoutProps {
  children?: React.ReactNode
  title?: string
}

const Container: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="absolute inset-x-0 shadow-xl  mx-auto rounded-lg rounded-t-none top-24 w-1440px px-75px  ">
      <div className="flex flex-col mt-40 ">
        <div className=" mb-10">
          <Typography type="h2">{title}</Typography>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Container
