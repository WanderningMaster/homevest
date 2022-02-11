import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/Navigation/NavLink'
import { ReactComponent as CompoundIcon } from 'assets/images/building-icon.svg'
import { ReactComponent as MapIcon } from 'assets/images/map-icon.svg'

import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { MenuItem } from 'components/Navigation/MenuItem'
import Button from 'components/common/button/button'

const AppBarDashboard: React.FC = () => {
  return (
    <>
      <div className="static flex flex-row items-center justify-between p-0">
        <Link to={AppRoute.NEW_BUILDINGS} className="text-black" activeClassName="text-green">
          <MenuItem text="New buildings" itemStyles="mr-14" iconStyles="mr-2">
            <CompoundIcon />
          </MenuItem>
        </Link>
        <Link to={AppRoute.MAP} className="text-black" activeClassName="text-green">
          <MenuItem text="Map" itemStyles="mr-14" iconStyles="mr-2">
            <MapIcon />
          </MenuItem>
        </Link>
        <Link to={AppRoute.SEARCH} className="text-black" activeClassName="text-green">
          <MenuItem text="Search" itemStyles="mr-14" iconStyles="mr-2">
            <SearchIcon />
          </MenuItem>
        </Link>
      </div>
      <Button nameBtn="secondary" label="Log out" onClick={() => console.log('click')} />
    </>
  )
}

export default AppBarDashboard
