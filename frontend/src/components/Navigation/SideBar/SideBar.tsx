import * as React from 'react'
import { Link } from 'components/Navigation/NavLink'
import { AppRoute } from 'common/enums'
import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-icon.svg'
import { ReactComponent as SettingsIcon } from 'assets/images/settings-icon.svg'
import MenuItem from '../MenuItem/MenuItem'
import { divide } from 'lodash'

const SideBar: React.FC = () => {
  const data = [
    {
      key: '1',
      to: AppRoute.DASHBOARD_ONE,
      text: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      key: '2',
      to: AppRoute.DASHBOARD_TWO,
      text: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      key: '3',
      to: AppRoute.SETTINGS,
      text: 'Settings',
      icon: <SettingsIcon />,
    },
  ]
  return (
    <div className="flex absolute top-0 left-0 h-full w items-start w-295px bg-white z-10 pt-14 px-16">
      <div className="flex flex-col">
        <h3 className="inline font-bold text-green leading-h3 text-4xl mb-16 order-none flex-grow-0">
          Homevest
        </h3>
        <div className="flex flex-col items-start">
          {data.map(({ key, to, text, icon }) => {
            return (
              <div key={key}>
                <Link to={to} className="text-lightblue" activeClassName="active:text-red">
                  <MenuItem text={text} itemStyles="mb-6 p-10px" iconStyles="mr-4">
                    {icon}
                  </MenuItem>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SideBar
