import * as React from 'react'
import clsx from 'clsx'

interface ItemProps {
  text?: string
  itemStyles?: string
  iconStyles?: string
  textStyles?: string
  children?: React.ReactNode
}

const MenuItem: React.FC<ItemProps> = ({ text, itemStyles, textStyles, iconStyles, children }) => {
  return (
    <div
      className={clsx('flex flex-row justify-center items-center static self-stretch ', itemStyles)}
    >
      <div className={clsx('static h-8 w-8', iconStyles)}>{children}</div>
      <h6
        className={clsx(
          'static font-semibold  text-20px text-h6 mr-6 mt-2px leading-8 whitespace-nowrap  hover:text-green focus:text-green',
          textStyles,
        )}
      >
        {text}
      </h6>
    </div>
  )
}

export default MenuItem
