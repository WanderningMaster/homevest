import * as React from 'react'
import { AppRoute } from 'common/enums'
import { Link } from 'components/common'
import { ReactComponent as CompoundIcon } from 'assets/images/building-icon.svg'
import { ReactComponent as MapIcon } from 'assets/images/map-icon.svg'
import { ReactComponent as DeveloperIcon } from 'assets/images/developer-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { MenuItem } from 'components/Navigation/MenuItem'

const AppBar: React.FC = () => {
  return (
    <div className="static flex flex-row items-center p-0">
      <Link to={AppRoute.MY_BUILDINGS}>
        <MenuItem
          text="New buildings"
          itemStyles="mr-14 p-0"
          iconStyles="mr-2"
          textStyles="text-black"
        >
          <CompoundIcon />
        </MenuItem>
      </Link>
      <Link to={AppRoute.MAP}>
        <MenuItem text="Map" itemStyles="mr-14 p-0" iconStyles="mr-2" textStyles="text-black">
          <MapIcon />
        </MenuItem>
      </Link>
      <Link to={AppRoute.PROPERTY}>
        <MenuItem
          text="Property developer"
          itemStyles="mr-14 p-0"
          iconStyles="mr-2"
          textStyles="text-black"
        >
          <DeveloperIcon />
        </MenuItem>
      </Link>
      <Link to={AppRoute.SEARCH}>
        <MenuItem text="Search" itemStyles="mr-14" iconStyles="mr-2 p-0" textStyles="text-black">
          <SearchIcon />
        </MenuItem>
      </Link>
    </div>
  )
}

export default AppBar
