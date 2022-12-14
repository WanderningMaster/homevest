import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from 'components/Navigation/Header'
import { Logo } from 'components/Navigation/Logo'
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard'
import SideBarDashboard from 'components/Navigation/SideBarDashboard/SideBarDashboard'
import { PropertyDevCard } from 'components/Dashboard/Property-dev-card'
import Button from 'components/common/button/button'
import { FiltersDashboard } from 'components/Dashboard/FiltersDashboard'
import { Dashboardlayout } from 'components/layouts/dashboard-layout'
import { getVisibleEstate } from 'store/estateApartments/estateApartmentsSelectors'
import { EstateApartmentsActionsCreator } from 'store/estateApartments/estateApartmentsReducer'
import { AppRoute } from 'common/enums'

function PropertyDevelopersPage(): JSX.Element {
  const [active, setActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(EstateApartmentsActionsCreator.fetchEstate())
  }, [])

  const estate = useSelector(getVisibleEstate)

  const onMenuClick = () => {
    setActive(!active)
  }
  const addPropertyPage = () => {
    history.push(AppRoute.SETTINGS_APARTMENT)
  }
  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onMenuClick} />
        <AppBarDashboard />
      </Header>

      <Dashboardlayout title="My buildings" className="pt-40">
        <FiltersDashboard />
        <ul className="flex flex-row justify-between grid-col-2 flex-wrap gap-6 mb-10">
          {estate &&
            estate.map(
              ({ id, nameOfBuilding, price, currency, images, yearOfOperation, salesStatus }) => (
                <PropertyDevCard
                  key={id}
                  name={nameOfBuilding}
                  image={images}
                  price={price}
                  currency={currency}
                  yearOfOperation={yearOfOperation}
                  salesStatus={salesStatus}
                />
              ),
            )}
        </ul>
        <div>
          <Button label="Add property" onClick={addPropertyPage} />
        </div>
        {active && <SideBarDashboard isLoggedIn={isLoggedIn} />}
      </Dashboardlayout>
    </>
  )
}

export default PropertyDevelopersPage
