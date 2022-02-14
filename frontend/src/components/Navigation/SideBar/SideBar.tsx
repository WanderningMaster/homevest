import * as React from 'react'
import { Link } from 'components/Navigation/NavLink'
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
        </h3>
        <div className="flex flex-col items-start">
          <Link
            to={AppRoute.DASHBOARD_ONE}
            className="text-lightblue"
            activeClassName="active:text-red"
          >
            <MenuItem text="Dashboard" itemStyles="mb-6 p-10px" iconStyles="mr-4">
              <DashboardIcon />
            </MenuItem>
          </Link>
          <Link to={AppRoute.DASHBOARD_TWO} className="text-lightblue" activeClassName="text-green">
            <MenuItem text="Dashboard" itemStyles="mb-6 p-10px" iconStyles="mr-4">
              <DashboardIcon />
            </MenuItem>
          </Link>
          <Link to={AppRoute.ACCOUNT_SETTINGS} className="text-lightblue" activeClassName="text-green">
            <MenuItem text="Settings" itemStyles="mb-6 p-10px" iconStyles="mr-4">
              <SettingsIcon />
            </MenuItem>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
