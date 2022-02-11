import React from 'react'
import { Typography } from 'components/common/typography/typography'

interface LayoutProps {
  children?: React.ReactNode
  title?: string
}

const Dashboardlayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className=" flex items-center justify-center mx-auto">
      <div className=" relative w-1290px flex flex-col mx-20 mt-96px">
        <div className=" w-1290px flex flex-col mt-64">
          <div className=" mb-10">
            <Typography type="h2">{title}</Typography>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Dashboardlayout
