import * as React from 'react'
import { AppRoute } from 'common/enums'
import { HomeIcon } from '@heroicons/react/solid'
import { Link } from 'components/common'
import { ReactComponent as LogoIcon } from 'assets/images/home-icon.svg'
import { ReactComponent as BurgerIcon } from 'assets/images/burger-icon.svg'

const Logo: React.FC = () => (
  <Link to={AppRoute.HOME_PAGE}>
    <div className="flex items-end mr-16">
      {/* <HomeIcon className="inline w-10 h-10 my-0 mx-4  stroke-1" /> */}
      <LogoIcon className="inline w-10 h-10 my-0 mx-4 stroke-current stroke-0 hover:translate-x-4" />

      <h3 className="inline mr-4 text-4xl font-bold leading-9 text-brand">Homevest</h3>
      <BurgerIcon className="inline w-8 h-8" />
    </div>
  </Link>
)

export default Logo
