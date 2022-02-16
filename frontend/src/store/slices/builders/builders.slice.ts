import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReducerName } from "common/enums";

export interface Actions {
    type: string;
    payload?: IBuilder[];
}

export interface IBuilder {
    id: string,
    name: string,
    images: string[],
    fullPrice: number,
    progressPrice: number
    percentYear: number,
    duration: number,
    location: string
    distribution: number
    profit: number
    interesting?: string[]
}

const initialState: IBuilder[] = [
    {
        "id": "001",
        "name": "RC Rainbow",
        "images": ["https://wallpaperaccess.com/full/1859246.jpg", "https://wallpaperaccess.com/full/1859246.jpg"],
        "fullPrice": 647000,
        "progressPrice": 45947.00,
        "percentYear": 5,
        "duration": 18,
        "location": "Ukraine",
        "distribution": 3,
        "profit": 26794.00,
        "interesting": ["11111"]
    },
    {
        "id": "002",
        "name": "RC Rainbow",
        "images": ["https://wallpaperaccess.com/full/1859246.jpg", "https://wallpaperaccess.com/full/1859246.jpg"],
        "fullPrice": 647000,
        "progressPrice": 45947.00,
        "percentYear": 5,
        "duration": 18,
        "location": "Ukraine",
        "distribution": 3,
        "profit": 26794.00
    },
    {
        "id": "003",
        "name": "RC Rainbow",
        "images": ["https://wallpaperaccess.com/full/1859246.jpg", "https://wallpaperaccess.com/full/1859246.jpg"],
        "fullPrice": 647000,
        "progressPrice": 45947.00,
        "percentYear": 5,
        "duration": 18,
        "location": "Ukraine",
        "distribution": 3,
        "profit": 26794.00,
        "interesting": ["11111"]
    },
    {
        "id": "004",
        "name": "RC Rainbow",
        "images": ["https://wallpaperaccess.com/full/1859246.jpg", "https://wallpaperaccess.com/full/1859246.jpg"],
        "fullPrice": 647000,
        "progressPrice": 45947.00,
        "percentYear": 5,
        "duration": 18,
        "location": "Ukraine",
        "distribution": 3,
        "profit": 26794.00
    }
]

const AsyncGetBuilders = ():Actions => ({type: 'ASYNC_GET_BUILDERS'})

const { reducer, actions } = createSlice({
    name: ReducerName.BUILDERS,
    initialState, 
    reducers: {
        getBuilders: (state, action: PayloadAction<IBuilder[]>) => {
            return state = action.payload
        }
    }
})

const BuildersActionsCreate = {
    ...actions,
    AsyncGetBuilders
}

export { BuildersActionsCreate,  reducer }