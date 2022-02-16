import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from 'components/Navigation/Header'
import { Logo } from 'components/Navigation/Logo'
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard'
import SideBarDashboard from 'components/Navigation/SideBarDashboard/SideBarDashboard'
import { PropertyDevCard } from 'components/Dashboard/Property-dev-card'
import Button from 'components/common/button/button'
// import { estate } from 'components/Dashboard/mock-data/mock-data'
import { FiltersDashboard } from 'components/Dashboard/FiltersDashboard'
import { Dashboardlayout } from 'components/layouts/dashboard-layout'
import { getDeveloperEstate } from 'store/estate/estateSelectors'
import { EstateActionsCreator } from 'store/estate/estateReducer'

function PropertyDevelopersPage(): JSX.Element {
  const [active, setActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const estate = useSelector(getDeveloperEstate)
  const dispatch = useDispatch()
  console.log(estate)

  useEffect(() => {
    dispatch(EstateActionsCreator.fetchEstate())
  }, [])

  const onMenuClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onMenuClick} />
        <AppBarDashboard />
      </Header>

      <Dashboardlayout title="My buildings">
        <FiltersDashboard />
        <ul className="flex flex-row justify-between grid-col-2 flex-wrap gap-6 mb-10">
          {estate.map(({ id, name, price, currency, image, description }) => (
            <PropertyDevCard
              key={id}
              name={name}
              image={image}
              price={price}
              currency={currency}
              description={description}
            />
          ))}
        </ul>
        <div>
          <Button label="Add property" onClick={() => console.log('Property added')} />
        </div>
        {active && <SideBarDashboard isLoggedIn={isLoggedIn} />}
      </Dashboardlayout>
    </>
  )
}

export default PropertyDevelopersPage
