import React from 'react';
import { DashboardMapCard } from './components/dashboard-map-card/dashboard-map-card';
import { DashboardMap } from './components/dashboard-map/dashboard-map';
import { mockData } from './mock-data/mock-data';
import { DasboardMapFilters } from './components/dashboard-map-filters/dashboard-map-filters';

export const DashboardMapPage: React.FC = () => {
  return (
    <div className="flex flex-row py-11">
      <div className="w-1/2">
        <DashboardMap items={mockData} />
      </div>
      <div>
        <DasboardMapFilters />
        {mockData.map((item) => (
          <DashboardMapCard
            key={item.id}
            name={item.name}
            adress={item.adress}
            price={item.price}
            bedroom={item.bedroom}
            bathroom={item.bathroom}
            built={item.built}
            parking={item.parking}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}