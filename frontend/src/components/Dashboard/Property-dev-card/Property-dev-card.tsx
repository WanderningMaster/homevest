import React from 'react'
import { Typography } from 'components/common/typography/typography'

interface LayoutProps {
  id?: string
  name?: string
  image?: string
  price?: string
  currency?: string
  yearOfOperation?: string
  salesStatus?: string
}

const PropertyDevCard: React.FC<LayoutProps> = ({
  name,
  image,
  id,
  price,
  currency,
  yearOfOperation,
  salesStatus,
}) => {
  return (
    <li
      key={id}
      className=" relative flex flex-col p-0 w-630px bg-white rounded-lg  overflow-hidden grid-rows-2 shadow-header border-0"
    >
      <img className=" h-300px w-full" src={image} alt={name} />
      <span className=" absolute p-0 top-4 right-4 text-yellow-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </span>
      <span className=" absolute top-52  right-4 left-4 p-0 text-white">
        <Typography type="h5">{name}</Typography>
        <Typography type="h5">
          from {price} {currency}
        </Typography>
      </span>
      <div className=" flex items-center justify-start p-6">
        <Typography type="h6">
          Year of operation {yearOfOperation}. Sales status {salesStatus}
        </Typography>
      </div>
    </li>
  )
}

export default PropertyDevCard
