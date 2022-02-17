/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { IEstate } from 'store/estate/estateReducer'

export const getDeveloperEstate = (state: { estate: IEstate[] }) => state.estate
