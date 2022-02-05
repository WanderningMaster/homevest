import * as React from 'react'
import { Link } from 'components/common'
import { AppRoute } from 'common/enums'
import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-icon.svg'
import { ReactComponent as SettingsIcon } from 'assets/images/settings-icon.svg'
import MenuItem from '../MenuItem/MenuItem'

const SideBar: React.FC = () => {
  return (
    <div className="flex absolute top-0 left-0 h-full w items-start w-295px bg-white z-10 pt-14 px-16">
      <div className="flex flex-col">
        <h3 className="inline font-bold text-green leading-h3 text-4xl mb-16 order-none flex-grow-0">
          Homevest
          {/* <Link to={AppRoute.HOME_PAGE}>Homevest</Link> */}
        </h3>
        <div className="flex flex-col items-start">
          <Link to={AppRoute.DASHBOARD_ONE}>
            <MenuItem
              text="Dashboard"
              itemStyles="mb-6 p-10px"
              iconStyles="mr-4"
              textStyles="text-light-blue"
            >
              <DashboardIcon />
            </MenuItem>
          </Link>
          <Link to={AppRoute.DASHBOARD_TWO}>
            <MenuItem
              text="Dashboard"
              itemStyles="mb-6 p-10px"
              iconStyles="mr-4"
              textStyles="text-light-blue"
            >
              <DashboardIcon />
            </MenuItem>
          </Link>
          <Link to={AppRoute.SETTINGS}>
            <MenuItem
              text="Settings"
              itemStyles="mb-6 p-10px"
              iconStyles="mr-4"
              textStyles="text-light-blue"
            >
              <SettingsIcon />
            </MenuItem>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
