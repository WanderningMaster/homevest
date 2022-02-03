import * as React from 'react'
import { Link } from 'components/common'
import { AppRoute } from 'common/enums'
import { ReactComponent as DashboardIcon } from 'assets/images/dashboard-icon.svg'
import { ReactComponent as SettingsIcon } from 'assets/images/settings-icon.svg'

const SideBar: React.FC = () => {
  return (
    <div className="flex absolute top-0 left-0 h-full items-start bg-white z-10 pt-14 px-16">
      <div className="flex flex-col">
        <h3 className="inline font-bold text-4xl mb-16 order-none flex-grow-0">
          <Link to={AppRoute.HOME_PAGE}>Homevest</Link>
        </h3>
        <ul className="flex flex-col items-start">
          <li className="flex flex-row items-center justify-center p-2.5 static flex-grow-0 self-stretch order-none mb-6">
            <h6 className="text-xl font-semibold leading-7 order-1 flex-grow">
              <Link to={AppRoute.DASHBOARD_ONE}>
                <DashboardIcon className="inline w-8 h-8 mr-4 rounded-lg order-none" />
                Dashboard
              </Link>
            </h6>
          </li>
          <li className="flex flex-row items-center justify-center p-2.5 static flex-grow-0 self-stretch order-none mb-6">
            <h6 className="text-xl font-medium leading-7 order-1 flex-grow">
              <Link to={AppRoute.DASHBOARD_TWO}>
                <DashboardIcon className="inline w-8 h-8 mr-4 rounded-lg order-none" />
                Dashboard
              </Link>
            </h6>
          </li>
          <li className="flex flex-row items-center justify-center p-2.5 static flex-grow-0 self-stretch order-2 mb-6">
            <h6 className="text-xl font-semibold leading-7 order-1 flex-grow">
              <Link to={AppRoute.SETTINGS}>
                <SettingsIcon className="inline w-8 h-8 mr-4 rounded-lg order-none" />
                Settings
              </Link>
            </h6>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
