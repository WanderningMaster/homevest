import React from 'react'
import { useState } from 'react'
// import { Dashboardlayout } from 'components/layouts/dashboard-layout'
import { Header } from 'components/Navigation/Header'
import { Logo } from 'components/Navigation/Logo'
import { AppBarDashboard } from 'components/Navigation/AppBarDashboard'
import SideBarDashboard from 'components/Navigation/SideBarDashboard/SideBarDashboard'
import { PropertyDevCard } from 'components/Dashboard/Property-dev-card'
import Button from 'components/common/button/button'
import { mockData } from 'components/Dashboard/mock-data/mock-data'
import { FiltersDashboard } from 'components/Dashboard/FiltersDashboard'
import { Container } from 'components/layouts/container'

const PropertyDevelopersPage: React.FC = () => {
  const [active, setActive] = useState(false)

  const onClick = () => {
    setActive(!active)
  }
  return (
    <>
      <Header position="left-0 justify-center py-6 px-75px ">
        <Logo onClick={onClick} />
        <AppBarDashboard />
      </Header>

      <Container title="My buildings">
        <FiltersDashboard />
        <ul className="flex flex-row justify-between grid-col-2 flex-wrap gap-6 mb-10">
          {mockData.map(({ id, name, price, currency, image, description }) => (
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
      </Container>
      {active && <SideBarDashboard />}
    </>
  )
}

export default PropertyDevelopersPage
