import React from 'react'
import { LocationInput } from 'components/common/input/location-input'
import ContainerFiltersAndPrice from 'components/common/filtes/containerFiltersAndPrice'

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
          <ContainerFiltersAndPrice returnValueAll={value => console.log(value)} />
        </div>
      </div>
    </>
  )
}

export default FiltersDashboard
