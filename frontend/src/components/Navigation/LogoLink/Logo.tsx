import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/common'
import { ReactComponent as HomeIcon } from 'assets/images/home-icon.svg'
import { ReactComponent as BurgerIcon } from 'assets/images/burger-icon.svg'

const Logo: React.FC = () => (
  <div className="flex flex-row items-end justify-start p-0 static mr-62px text-green">
    <div className="flex flex-row items-center justify-center">
      <HomeIcon className="h-10 w-10 stroke-current" />
    </div>
    <div className="flex flex-row items-start justify-start text-green w-80">
      <Link to={AppRoute.HOME_PAGE}>
        <h3 className="inline mx-4 text-4xl font-bold leading-9 text-green">Homevest</h3>
      </Link>
      <div className="my-auto">
        <BurgerIcon className="inline w-8 h-8 stroke-current" />
      </div>
    </div>
  </div>
)

export default Logo
