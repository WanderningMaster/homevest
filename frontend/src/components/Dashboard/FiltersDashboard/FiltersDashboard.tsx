import React from 'react'
import { LocationInput } from 'components/common/input/location-input'
import { Select } from 'components/common/select/select'

const FiltersDashboard: React.FC = () => {
  return (
    <>
      <div className="w-1290px flex justify-between items-center absolute top-12 ">
        <div className="">
          <LocationInput
            name="location"
            value="Muckachevo"
            onChange={() => console.log('Change')}
            classes={{
              input: 'w-53 h-12',
            }}
          />
        </div>
        <div className=" flex flex-row gap-7">
          <div>
            <Select
              options={[]}
              name="Filters"
              placeholder="Filters"
              onChange={() => console.log('Change')}
              overrideClassNames={{
                Control: () => 'w-47.5 h-8.5',
                Menu: () => 'w-47.5',
                // Option: () => 'w-43.5',
              }}
            />
          </div>
          <div>
            <Select
              options={[]}
              name="Prices"
              placeholder="Prices"
              overrideClassNames={{
                Control: () => 'w-47.5 h-8.5',
                Menu: () => 'w-47.5',
                // Option: () => 'w-43.5',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FiltersDashboard
