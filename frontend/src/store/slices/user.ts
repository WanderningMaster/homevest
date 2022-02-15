import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserData {
    id: string;
    role: string;
}

export interface UserState {
    isAuth: boolean;
    userData: UserData;
}

const initialState: UserState = {
    isAuth: false,
    userData: {} as UserData
}

const {actions, reducer} = createSlice({
    name: 'User',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<UserData>) => {
            state.isAuth = true;
            state.userData = action.payload;
        },
        loginFailed: (state) =>{
            state.isAuth = false;
            state.userData = {} as UserData;
        },
        logout: (state, action: PayloadAction<UserData>) => {
            state.isAuth = false;
            state.userData = action.payload;
        }
    }
});

const asyncLoginSaga = () => ({type: "asyncLogin"});
const asyncLogoutSaga = () => ({type: "asyncLogout"});
const asyncCheckAuthSaga = () => ({type: "asyncCheckAuth"});
const asyncSIgnUpSaga = () => ({type: "asyncSignUp"});

const UserActionCreator = {
    ...actions,
    asyncLoginSaga,
    asyncLogoutSaga,
    asyncCheckAuthSaga,
    asyncSIgnUpSaga
}

export {reducer, UserActionCreator};