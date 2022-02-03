import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/common'
import { ReactComponent as CompoundIcon } from 'assets/images/building-icon.svg'
import { ReactComponent as MapIcon } from 'assets/images/map-icon.svg'
import { ReactComponent as DeveloperIcon } from 'assets/images/developer-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'

const TopNavigationBar: React.FC = () => {
  return (
    <ul className="flex flex-row justify-between mr-16">
      <li className="inline-flex flex-row justify-center items-center p-0 static mr-14 h-8 order-none">
        <h6 className="inline-flex font-semibold text-xl mr-6 leading-8">
          <Link to={AppRoute.MY_BUILDINGS}>
            <CompoundIcon className="inline mr-2 " />
            New buildings
          </Link>
        </h6>
      </li>
      <li className="inline-flex flex-row justify-center align-middle p-0 static mr-14 h-8 order-1">
        <h6 className="inline-flex font-semibold text-xl mr-6 leading-8">
          <Link to={AppRoute.MAP}>
            <MapIcon className="inline mr-2" />
            Map
          </Link>
        </h6>
      </li>
      <li className="inline-flex flex-row justify-center align-middle p-0 static mr-14 h-8 order-2">
        <h6 className="inline-flex font-semibold text-xl mr-6 leading-8">
          <Link to={AppRoute.SEARCH}>
            <SearchIcon className="inline mr-2" />
            Search
          </Link>
        </h6>
      </li>
      <li className="inline-flex flex-row justify-center align-middle p-0 static mr-14 h-8 order-3">
        <h6 className="inline-flex font-semibold text-xl mr-6 leading-8">
          <Link to={AppRoute.PROPERTY}>
            <DeveloperIcon className="inline mr-2" />
            Property developer
          </Link>
        </h6>
      </li>
    </ul>
  )
}

export default TopNavigationBar
