import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/Navigation/NavLink'
import { ReactComponent as CompoundIcon } from 'assets/images/building-icon.svg'
import { ReactComponent as MapIcon } from 'assets/images/map-icon.svg'
import { ReactComponent as DeveloperIcon } from 'assets/images/developer-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { MenuItem } from 'components/Navigation/MenuItem'

const AppBar: React.FC = () => {
  return (
    <div className="static flex flex-row items-center p-0">
      <Link to={AppRoute.NEW_BUILDINGS} className="text-black" activeClassName="text-green">
        <MenuItem text="New buildings" itemStyles="mr-14 p-0" iconStyles="mr-2">
          <CompoundIcon />
        </MenuItem>
      </Link>
      <Link to={AppRoute.MAP} className="text-black" activeClassName="text-green">
        <MenuItem text="Map" itemStyles="mr-14 p-0" iconStyles="mr-2">
          <MapIcon />
        </MenuItem>
      </Link>
      <Link to={AppRoute.PROPERTY} className="text-black" activeClassName="text-green">
        <MenuItem text="Property developer" itemStyles="mr-14 p-0" iconStyles="mr-2">
          <DeveloperIcon />
        </MenuItem>
      </Link>
      <Link to={AppRoute.SEARCH} className="text-black" activeClassName="text-green">
        <MenuItem text="Search" itemStyles="mr-14" iconStyles="mr-2">
          <SearchIcon />
        </MenuItem>
      </Link>
    </div>
  )
}

export default AppBar